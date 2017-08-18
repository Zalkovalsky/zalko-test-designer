import { Component, Input } from '@angular/core';
import { DynamicField } from './../../models/dynamic-field.interface';
import { BaseElement,Option } from './../../models/base-element';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'single-selection-question',
    templateUrl: './single-selection-question.component.html'
})
export class SingleSelectionQuestionComponent implements DynamicField {
    element: BaseElement;
    formGroup: FormGroup;

    trackByIndex(index: number, obj: Option) {
        return obj.index;
    }
    pushOption(): void {

        console.trace('traced');

        if (!this.element.options) {
            this.element.options = new Array<Option>();
        }

        let option = new Option(this.element.options.length + 1, 'Please edit me');
        
        this.element.options.push(option);
    }

    popOption(option: string): void {
        // TODO: make strongly-typed
        // this.element.options = this.element.options.filter((o) => o === option);
    }
}
