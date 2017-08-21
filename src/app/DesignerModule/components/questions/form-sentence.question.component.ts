import { Component } from '@angular/core';
import { DynamicField } from './../../models/dynamic-field.interface';
import { BaseElement } from './../../models/base-element';
import { FormGroup } from '@angular/forms';
import { CollectionHelperService } from './../../services/collection-helper.service';

@Component({
    selector: 'form-sentence-question',
    templateUrl: './form-sentence.question.component.html',
    styleUrls: ['./../../designer-module.style.css']    
})
export class FormSentenceQuestionComponent implements DynamicField {
    element: BaseElement;
    formGroup: FormGroup;

    constructor(private collectionHelperService: CollectionHelperService) {
    }

    onSave(): void {
        let split = this.element.additionalText.split(' ');
        this.collectionHelperService.shuffle(split);
        this.element.additionalText = split.join(' ');
    }
}
