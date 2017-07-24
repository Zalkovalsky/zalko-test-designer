import { Injectable } from '@angular/core'
import { ElementType } from '../models/element-type';

const availableTypes: ElementType[] = [
    new ElementType('Short text'),
    new ElementType('Single selection'),
    new ElementType('Form sentence'),
    new ElementType('Fill up blank space')
];

@Injectable()
export class ElementTypeService {
    GetAvailableTypes(): ElementType[] {
        return availableTypes;
    }
}
