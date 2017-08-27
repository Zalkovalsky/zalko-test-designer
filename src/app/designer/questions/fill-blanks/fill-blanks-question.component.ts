import { Component } from '@angular/core';
import { DynamicField } from './../../shared/models/dynamic-field.interface';
import { BaseElement } from './../../shared/models/base-element';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'fill-blanks-question',
    templateUrl: './fill-blanks-question.component.html',
    styleUrls: ['./../../designer-module.style.css']    
})
export class FillBlanksQuestionComponent implements DynamicField {
    element: BaseElement;
    formGroup: FormGroup;
}
