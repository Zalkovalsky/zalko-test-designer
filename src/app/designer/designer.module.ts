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
    MdSlideToggleModule,
    MdSidenavModule,
    MdListModule
} from '@angular/material';

import { NewElementComponent } from './new-element/new-element.component';
import { FormHeaderComponent } from './form-header/form-header.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DesignerGridComponent } from './designer-grid/designer-grid.component';
import { FormSettingsComponent } from './form-settings/form-settings.component';
import { EditableTextComponent } from './editable-text/editable-text.component';
import { EditableMultilineTextComponent } from './editable-multiline-text/editable-multiline-text.component';

import { NewElementService } from './shared/services/new-element.service';

import { DynamicFieldDirective } from './shared/dynamic-field.directive';
import { ShortTextQuestionComponent } from './questions/short-text/short-text-question.component';
import { SingleSelectionQuestionComponent } from './questions/single-selection/single-selection-question.component';
import { FormSentenceQuestionComponent } from './questions/form-sentence/form-sentence.question.component';
import { FillBlanksQuestionComponent } from './questions/fill-blanks/fill-blanks-question.component';

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
        MdSidenavModule,
        MdListModule,
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
        EditableMultilineTextComponent,
        ShortTextQuestionComponent,
        SingleSelectionQuestionComponent,
        FormSentenceQuestionComponent,
        FillBlanksQuestionComponent
    ],
    bootstrap: [
        NewElementComponent
    ],
    exports: [
        DesignerGridComponent
    ],
    providers: [
        NewElementService
    ],
    entryComponents: [ // for dynamic generation
        ShortTextQuestionComponent,
        SingleSelectionQuestionComponent,
        FormSentenceQuestionComponent,
        FillBlanksQuestionComponent
    ]
})
export class DesignerModule { }
