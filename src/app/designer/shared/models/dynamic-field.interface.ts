import { FormGroup } from '@angular/forms';
import { BaseElement } from './../../../models/base-element';
import { EventEmitter } from '@angular/core';

export interface DynamicField {
    formGroup: FormGroup;
    element: BaseElement;
    onSave: EventEmitter<BaseElement>;
    onDelete: EventEmitter<BaseElement>;
}
