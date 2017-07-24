import { Injectable } from '@angular/core'
import { ElementType } from '../models/element-type';

const availableTypes: ElementType[] = [
    new ElementType('Short text'),
    new ElementType('Single selection')
];

@Injectable()
export class ElementTypeService {
    GetAvailableTypes(): ElementType[] {
        return availableTypes;
    }
}
