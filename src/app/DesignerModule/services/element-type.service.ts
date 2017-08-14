import { Injectable } from '@angular/core'
import { ElementType } from '../models/element-type';

@Injectable()
export class ElementTypeService {
    GetAvailableTypes(): string[] {

        let typeArray = Object.keys(ElementType).map(function(type) {
            return ElementType[type];
        });

        return typeArray;
    }
}
