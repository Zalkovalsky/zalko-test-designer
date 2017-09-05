import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DynamicField } from './../../shared/models/dynamic-field.interface';
import { BaseElement } from './../../../models/base-element';
import { FormGroup } from '@angular/forms';
import { Option } from '../../../models/option';
@Component({
    selector: 'single-selection-question',
    templateUrl: './single-selection-question.component.html',
    styleUrls: ['./../../designer-module.style.css']
})
export class SingleSelectionQuestionComponent implements DynamicField {
    element: BaseElement;
    formGroup: FormGroup;

    @Output() onSave = new EventEmitter<BaseElement>();
    @Output() onDelete = new EventEmitter<BaseElement>();

    removeOption(option: Option) {
        this.element.removeOption(option);
        this.update();
    }

    pushOption(): void {
        this.element.pushOption('Please edit me');
        this.update();
    }

    update () {
        this.onSave.emit(this.element);
    }

    delete () {
        this.onDelete.emit(this.element);
    }
}
