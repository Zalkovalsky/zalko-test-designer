import { Component } from '@angular/core';
import { DynamicField } from './../../models/dynamic-field.interface';
import { BaseElement } from './../../models/base-element';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'fill-blanks-question',
    templateUrl: './fill-blanks-question.component.html'
})
export class FillBlanksQuestionComponent implements DynamicField {
    element: BaseElement;
    formGroup: FormGroup;
}
