import { CommonModule } from '@angular/common'
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { MatNativeDateModule } from '@angular/material/core'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatFormFieldModule } from '@angular/material/form-field'
import { UiInputsModule } from '@geonetwork-ui/ui/inputs'
import { TranslateModule } from '@ngx-translate/core'
import { WizardFieldComponent } from './components/wizard-field/wizard-field.component'
import { WizardSummarizeComponent } from './components/wizard-summarize/wizard-summarize.component'
import { WizardComponent } from './components/wizard/wizard.component'

@NgModule({
  declarations: [
    WizardComponent,
    WizardFieldComponent,
    WizardSummarizeComponent,
  ],
  imports: [
    CommonModule,
    UiInputsModule,
    TranslateModule.forChild(),
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    HttpClientModule,
    HttpClientXsrfModule,
  ],
  exports: [WizardComponent, WizardSummarizeComponent],
  providers: [],
})
export class FeatureEditorModule {}
export * from './models/index'
export * from './services/wizard.service'
