import { Component, Input } from '@angular/core';
import { DynamicField } from './../../models/dynamic-field.interface';
import { BaseElement, Option } from './../../models/base-element';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'single-selection-question',
    templateUrl: './single-selection-question.component.html'
})
export class SingleSelectionQuestionComponent implements DynamicField {
    element: BaseElement;
    formGroup: FormGroup;

    pushOption(): void {
        this.element.pushOption('Please edit me');
    }

    popOption(option: Option): void {
        let index = this.element.options.indexOf(option);

        this.element.options.splice(index, 1);
    }
}
