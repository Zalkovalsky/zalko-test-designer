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
    options?: Option[] = [];
    placeholderText?: string;

    constructor(init?: Partial<BaseElement>) {
        Object.assign(this, init);
    }

    pushOption(value: string) {
        if (!value) {
            throw new Error('New option value has to defined');
        }

        let ids: number[] = this.options.map(x => {
            return x.index
        });
        let nextId = Math.max(...ids) + 1;

        this.options.push(new Option(nextId, value));
    }

    removeOption(option: Option) {
        let index = this.options.indexOf(option);

        if (index !== -1) {
            this.options.splice(index, 1);
        }
    }
}


