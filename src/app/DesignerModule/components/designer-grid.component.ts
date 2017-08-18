import { Component } from '@angular/core';
import { DynamicField } from './../models/dynamic-field.interface';
import { BaseElement, Option } from './../models/base-element';
import { ElementType } from './../models/element-type';

@Component({
    selector: 'designer-grid',
    templateUrl: './designer-grid.component.html',
    styleUrls: ['./../designer-module.style.css']
})
export class DesignerGridComponent {
    elements: Array<BaseElement> = [
        new BaseElement({
            elementType: ElementType.ShortText,
            name: 'text1',
            placeholderText: 'Placeholder1',
            questionText: 'Sample question',
            questionId: 1}),
        new BaseElement({
            elementType: ElementType.SingleSelection,
            name: 'ss1',
            placeholderText: 'Placeholder2',
            questionId: 2,
            questionText: 'Select one',
            options: [ new Option(1, 'Sample')]
        }),
        new BaseElement({
            elementType: ElementType.FormSentence,
            name: 'f1',
            placeholderText: 'Placeholder3',
            questionId: 3,
            questionText: 'Put in correct order',
            additionalText: 'I change all letters a'
        })
    ]
}
