import { Component, OnDestroy, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import {
  DatasetPublishingStatusApiModel,
  PublishJobStatusApiModel,
  PublishStatusEnumApiModel,
} from '@geonetwork-ui/data-access/datafeeder'
import { LANG_2_TO_3_MAPPER } from '@geonetwork-ui/util/i18n'
import { TranslateService } from '@ngx-translate/core'
import { Subscription } from 'rxjs'
import { take } from 'rxjs/operators'
import { DatafeederFacade } from '../../../store/datafeeder.facade'
import { HttpClient } from '@angular/common/http'
import SETTINGS from "../../../../settings";
import {marker} from "@biesbjerg/ngx-translate-extract-marker";

interface DatasetModel extends DatasetPublishingStatusApiModel {
  _links: any
}
export interface JobStatusModel extends PublishJobStatusApiModel {
  jobId?: string
  progress?: number
  status?: PublishStatusEnumApiModel
  error?: string
  datasets: DatasetModel[]
}

marker('datafeeder.publishSuccess.geonetworkRecord')
marker('datafeeder.publishSuccess.mapViewer')
marker('datafeeder.publishSuccess.ogcFeature')

@Component({
  selector: 'gn-ui-success-publish-page',
  templateUrl: './success-publish-page.component.html',
  styleUrls: ['./success-publish-page.component.css'],
})
export class SuccessPublishPageComponent implements OnInit, OnDestroy {
  subscription: Subscription
  gnLink: string
  gsLink: string
  ogcLink: string
  linksToDisplay: { uri: string, label: any }[] = []

  constructor(
    private facade: DatafeederFacade,
    private router: Router,
    private translateService: TranslateService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.subscription = new Subscription()

    this.subscription.add(
      this.facade.publication$
        .pipe(take(1))
        .subscribe((job: JobStatusModel) => {
          const links = job.datasets[0]._links
          SETTINGS.links.forEach((link) => {
            if (link === ('geonetwork')) {
              this.gnLink = links.describedBy[1].href.replace(
                '/eng/',
                `/${LANG_2_TO_3_MAPPER[this.translateService.currentLang]}/`
              )
              this.linksToDisplay.push({uri: this.gnLink, label: this.translateService.instant('datafeeder.publishSuccess.geonetworkRecord')})
            }
            else if (link === ('openlayers')) {
              this.gsLink = links.preview?.href
              this.http
                .get(this.gsLink, { observe: 'response', responseType: 'text' })
                .subscribe((data) => {
                  if (
                    data.headers.get('content-type') === 'text/xml;charset=utf-8' &&
                    data.body?.includes('NullPointerException')
                  ) {
                    this.gsLink = ''
                  } else {
                    this.linksToDisplay.push({uri: this.gsLink, label: this.translateService.instant('datafeeder.publishSuccess.mapViewer')})
                  }
                })
            }
            else if (link === ('ogc-features')) {
              this.ogcLink = links.hosts?.href
              if (this.ogcLink)
                this.linksToDisplay.push({uri: this.ogcLink, label: this.translateService.instant('datafeeder.publishSuccess.ogcFeature')})
            } else {
              this.linksToDisplay.push({uri: this.replaceVars(link.uri, job.datasets[0]), label: link.title[this.translateService.currentLang] || link.title.default})
            }
          })
        })
    )
  }

  openLink(link: string) {
    window.open(link, '_blank')
  }

  replaceVars(uri: string, job: DatasetModel) {
    return uri.replace(':uuid', job.metadataRecordId || '').replace(':lang', this.translateService.currentLang)
  }

  backToHome() {
    this.router.navigate(['/'])
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
