import { Injectable } from '@angular/core';
import { BaseElement } from '../models/base-element';
import { ElementType } from '../models/element-type';

export class ElementFactoryService {
    create(type: ElementType, id: number): BaseElement {

        let element = new BaseElement({
            elementType: type,
            questionId: id,
            name: 'form-element-' + id,
            additionalText: 'Please edit me',
            placeholderText: 'Please edit me',
            questionText: 'Please edit me'
        });

        return element;
    }
}
