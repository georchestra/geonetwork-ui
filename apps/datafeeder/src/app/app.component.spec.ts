import { TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { AppComponent } from './app.component'
import { UtilSharedModule } from '@geonetwork-ui/util/shared'
import SETTINGS from '../settings'

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, UtilSharedModule],
      declarations: [AppComponent],
    }).compileComponents()
  })

  describe('', () => {
    let fixture
    let app
    beforeEach(async () => {
      fixture = TestBed.createComponent(AppComponent)
      app = fixture.componentInstance
    })
    it('should create the app', () => {
      expect(app).toBeTruthy()
    })
    it(`should have as title 'datafeeder'`, () => {
      expect(app.title).toEqual('datafeeder')
    })
    it(`should have SETTINGS.headerHeight as height`, () => {
      expect(app.headerHeight).toEqual(SETTINGS.headerHeight)
    })
    it(`should have SETTINGS.headerSrc as src`, () => {
      expect(app.headerSrc).toEqual(SETTINGS.headerSrc)
    })
  })
})
