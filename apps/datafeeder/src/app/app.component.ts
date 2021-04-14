import { Component, OnInit } from '@angular/core'
import { ThemeService } from '@geonetwork-ui/util/shared'
import SETTINGS from '../settings'

@Component({
  selector: 'gn-ui-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'datafeeder'
  headerSrc = SETTINGS.headerSrc
  headerHeight = SETTINGS.headerHeight

  ngOnInit() {
    ThemeService.applyCssVariables('#1EA9D5', '#EF7749', '#2E353A', '#fff')
  }
}
