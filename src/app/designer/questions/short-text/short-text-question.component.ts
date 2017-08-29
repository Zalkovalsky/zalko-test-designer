import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DynamicField } from './../../shared/models/dynamic-field.interface';
import { BaseElement } from './../../../models/base-element';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'short-text-question',
    templateUrl: './short-text-question.component.html',
    styleUrls: ['./../../designer-module.style.css']
})
export class ShortTextQuestionComponent implements DynamicField {
    element: BaseElement;
    formGroup: FormGroup;

}

