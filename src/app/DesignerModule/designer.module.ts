import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import {
    MdCoreModule,
    MdButtonModule,
    MdIconModule,
    MdSelectModule,
    MdInputModule,
    MdOptionModule,
    MdCardModule,
    MdGridListModule,
    MdToolbarModule,
    MdSlideToggleModule
} from '@angular/material';

import { NewElementComponent } from './components/new-element.component';
import { FormHeaderComponent } from './components/form-header.component';
import { DynamicFormComponent } from './components/dynamic-form.component';
import { DesignerGridComponent } from './components/designer-grid.component';
import { FormSettingsComponent } from './components/form-settings.component';
import { EditableTextComponent } from './components/editable-text.component';
import { ElementTypeService } from './services/element-type.service';

import { DynamicFieldDirective } from './components/dynamic-field.directive';
import { ShortTextQuestionComponent } from './components/questions/short-text-question.component';
import { SingleSelectionQuestionComponent } from './components/questions/single-selection-question.component';

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        MdCoreModule,
        MdCardModule,
        MdButtonModule,
        MdIconModule,
        MdSelectModule,
        MdInputModule,
        MdOptionModule,
        MdGridListModule,
        MdToolbarModule,
        MdSlideToggleModule,
        CommonModule
    ],
    declarations: [
        DynamicFieldDirective,
        NewElementComponent,
        DynamicFormComponent,
        FormHeaderComponent,
        DesignerGridComponent,
        FormSettingsComponent,
        EditableTextComponent,
        ShortTextQuestionComponent,
        SingleSelectionQuestionComponent
    ],
    bootstrap: [
        NewElementComponent
    ],
    exports: [
        DesignerGridComponent
    ],
    providers: [
        ElementTypeService
    ],
    entryComponents: [ // for dynamic generation
        ShortTextQuestionComponent,
        SingleSelectionQuestionComponent
    ]
})
export class DesignerModule { }
