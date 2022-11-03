import {
  ChangeDetectionStrategy,
  Component,
  DebugElement,
  Input,
  NO_ERRORS_SCHEMA,
} from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { LinkClassifierService, MetadataLink } from '@geonetwork-ui/util/shared'
import { LINK_FIXTURES } from '@geonetwork-ui/util/shared/fixtures'
import { TranslateModule } from '@ngx-translate/core'

import { DownloadsListComponent } from './downloads-list.component'

@Component({
  selector: 'gn-ui-download-item',
  template: ``,
})
class MockDownloadItemComponent {
  @Input() link: MetadataLink
  @Input() color: string
  @Input() format: string
  @Input() isFromWfs: boolean
}

describe('DownloadsListComponent', () => {
  let component: DownloadsListComponent
  let fixture: ComponentFixture<DownloadsListComponent>
  let de

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      declarations: [DownloadsListComponent, MockDownloadItemComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [LinkClassifierService],
    })
      .overrideComponent(DownloadsListComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default },
      })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadsListComponent)
    component = fixture.componentInstance
    component.links = []
    de = fixture.debugElement
  })

  it('should create', () => {
    fixture.detectChanges()
    expect(component).toBeTruthy()
  })

  describe('when a list of downloads', () => {
    let items: DebugElement[]

    beforeEach(() => {
      component.links = [
        LINK_FIXTURES.dataCsv,
        LINK_FIXTURES.dataPdf,
        LINK_FIXTURES.dataPdf,
      ]
      fixture.detectChanges()
      items = de.queryAll(By.directive(MockDownloadItemComponent))
    })
    it('contains one link', () => {
      expect(items.length).toBe(3)
    })
  })

  describe('when a list of downloads is empty', () => {
    let item: DebugElement

    beforeEach(() => {
      component.links = []
      fixture.detectChanges()
      item = de.query(By.directive(DownloadsListComponent))
    })
    it('should not display', () => {
      expect(item).toBeNull()
    })
  })

  describe('when link format is unknown', () => {
    let items: DebugElement[]

    beforeEach(() => {
      component.links = [LINK_FIXTURES.unknownFormat]
      fixture.detectChanges()
      items = de.queryAll(By.directive(MockDownloadItemComponent))
    })
    it('contains one link', () => {
      expect(items.length).toBe(1)
    })
  })
  describe('derivates color and format from link', () => {
    let items: DebugElement[]

    beforeEach(() => {
      component.links = [LINK_FIXTURES.geodataShpWithMimeType]
      fixture.detectChanges()
      items = de.queryAll(By.directive(MockDownloadItemComponent))
    })
    it('contains color, isWfs & format', () => {
      expect(items.length).toBe(1)
      expect(items[0].componentInstance.link).toEqual(
        LINK_FIXTURES.geodataShpWithMimeType
      )
      expect(items[0].componentInstance.format).toEqual('shp')
      expect(items[0].componentInstance.color).toEqual(
        expect.stringMatching(/#[0-9a-b]{2,6}/i)
      )
      expect(items[0].componentInstance.isFromWfs).toEqual(false)
    })
  })
  describe('filtering', () => {
    beforeEach(() => {
      component.links = [LINK_FIXTURES.dataCsv]
      component.activeFilterFormats = ['csv', 'json']
      fixture.detectChanges()
    })
    it('csv link is displayed', () => {
      expect(component.filteredLinks.length).toBe(1)
      component.toggleFilterFormat('csv')
      expect(component.filteredLinks.length).toBe(0)
    })
  })
})
