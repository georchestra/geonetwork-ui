import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { UtilSharedModule } from '@geonetwork-ui/util/shared'
import { TranslateModule } from '@ngx-translate/core'
import { TagInputModule } from 'ngx-chips'
import { NgxDropzoneModule } from 'ngx-dropzone'
import { ButtonComponent } from './button/button.component'
import { ChipsInputComponent } from './chips-input/chips-input.component'
import { DragAndDropFileInputComponent } from './drag-and-drop-file-input/drag-and-drop-file-input.component'
import { DropdownSelectorComponent } from './dropdown-selector/dropdown-selector.component'
import { TextAreaComponent } from './text-area/text-area.component'
import { TextInputComponent } from './text-input/text-input.component'
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { MatIconModule } from '@angular/material/icon'
import { UiWidgetsModule } from '@geonetwork-ui/ui/widgets'
import { OverlayModule } from '@angular/cdk/overlay'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatTooltipModule } from '@angular/material/tooltip'
import { CommonModule } from '@angular/common'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core'
import { ImageInputComponent } from './image-input/image-input.component'

@NgModule({
  declarations: [
    TextInputComponent,
    DragAndDropFileInputComponent,
    ChipsInputComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule.forChild(),
    NgxDropzoneModule,
    FormsModule,
    ReactiveFormsModule,
    TagInputModule,
    UtilSharedModule,
    MatAutocompleteModule,
    MatIconModule,
    UiWidgetsModule,
    OverlayModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    TextAreaComponent,
    ButtonComponent,
    ImageInputComponent,
    DropdownSelectorComponent,
  ],
  exports: [
    DropdownSelectorComponent,
    ButtonComponent,
    TextInputComponent,
    DragAndDropFileInputComponent,
    TextAreaComponent,
    ChipsInputComponent,
  ],
})
export class UiInputsModule {}
