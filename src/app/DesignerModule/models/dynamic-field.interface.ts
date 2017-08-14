import { FormGroup } from '@angular/forms';
import { BaseElement } from './base-element';

export interface DynamicField {
    formGroup: FormGroup;
    element: BaseElement;
}
