import { TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { AppComponent } from './app.component'
import { UtilSharedModule } from '@geonetwork-ui/util/shared'

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
  })
})
