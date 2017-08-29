import { FormGroup } from '@angular/forms';
import { BaseElement } from './../../../models/base-element';

export interface DynamicField {
    formGroup: FormGroup;
    element: BaseElement;
}
