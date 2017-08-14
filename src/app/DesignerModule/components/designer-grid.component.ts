import { Component } from '@angular/core';
import { DynamicField } from './../models/dynamic-field.interface';
import { BaseElement } from './../models/base-element';
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
            questionId: 1})
    ]
}
