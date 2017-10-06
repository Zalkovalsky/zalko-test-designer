import { Injectable } from '@angular/core';
import { BaseElement } from '../../models/base-element';
import { ElementType } from '../../models/element-type';
import { Option } from '../../models/option';

@Injectable()
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

        if (type === ElementType.SingleSelection) {
            element.options = [new Option(0, 'Please edit me')];
        }

        return element;
    }
}
