import { Component, Input, Output,EventEmitter } from '@angular/core';
import { DynamicField } from './../../shared/models/dynamic-field.interface';
import { BaseElement } from './../../../models/base-element';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'single-selection-question',
    templateUrl: './single-selection-question.component.html',
    styleUrls: ['./../../designer-module.style.css']
})
export class SingleSelectionQuestionComponent implements DynamicField {
    element: BaseElement;
    formGroup: FormGroup;

    @Output() onSave = new EventEmitter<BaseElement>();

    pushOption(): void {
        this.element.pushOption('Please edit me');
    }
}
