import { Component, Input } from '@angular/core';
import { DynamicField } from './../../models/dynamic-field.interface';
import { BaseElement } from './../../models/base-element';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'single-selection-question',
    templateUrl: './single-selection-question.component.html'
})
export class SingleSelectionQuestionComponent implements DynamicField {
    element: BaseElement;
    formGroup: FormGroup;


    pushOption(): void {
        if (!this.element.options) {
            this.element.options = new Array<string>();
        }

        this.element.options.push('Please edit me');
    }

    popOption(option: string): void {
        // TODO: make strongly-typed
        this.element.options = this.element.options.filter((o) => o === option);
    }
}
