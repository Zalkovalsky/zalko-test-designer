import { Injectable } from '@angular/core'
import { ElementType } from '../models/element-type';

export class TypeSelection {
    constructor(public type: ElementType, public value: string) { }
}

@Injectable()
export class ElementTypeService {
    GetAvailableTypes(): TypeSelection[] {

        let typeArray = Object.keys(ElementType).map(function (type) {
            return new TypeSelection(ElementType[type], ElementType[type]);
        });

        return typeArray;
    }
}
