import { ElementType } from './element-type';
import { Movable } from './movable.interface';
import { ValidatorFn } from '@angular/forms';

export class Option {
    constructor(public index: number, public value: string) { }

}

export class BaseElement implements Movable {
    // Mandatory
    questionId: number;
    questionText: string;
    displayOrder: number;
    elementType: ElementType;
    name: string;

    // Movable
    row: number;
    column: number;
    isMoving: boolean;

    additionalText?: string;
    options?: Option[];
    placeholderText?: string;

    constructor(init?: Partial<BaseElement>) {
        Object.assign(this, init);
    }
}


