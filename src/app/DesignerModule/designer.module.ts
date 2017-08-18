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
import { EditableMultilineTextComponent } from './components/editable-multiline-text.component';

import { ElementTypeService } from './services/element-type.service';
import { CollectionHelperService } from './services/collection-helper.service';

import { DynamicFieldDirective } from './components/dynamic-field.directive';
import { ShortTextQuestionComponent } from './components/questions/short-text-question.component';
import { SingleSelectionQuestionComponent } from './components/questions/single-selection-question.component';
import { FormSentenceQuestionComponent } from './components/questions/form-sentence.question.component';
import { FillBlanksQuestionComponent } from './components/questions/fill-blanks-question.component';

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
        ElementTypeService,
        CollectionHelperService
    ],
    entryComponents: [ // for dynamic generation
        ShortTextQuestionComponent,
        SingleSelectionQuestionComponent,
        FormSentenceQuestionComponent,
        FillBlanksQuestionComponent
    ]
})
export class DesignerModule { }
