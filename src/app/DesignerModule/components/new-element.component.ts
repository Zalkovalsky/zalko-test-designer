import { Component, OnInit } from '@angular/core';

import {ElementTypeService} from '../services/element-type.service';
import { ElementType } from '../models/element-type';

@Component({
    selector: 'new-element',
    templateUrl: './new-element.component.html'
})
export class NewElementComponent implements OnInit {
    availableTypes: ElementType[];
    selectedType: ElementType;

    constructor(private elementTypeService: ElementTypeService) {
    }

    ngOnInit(): void {
        this.availableTypes = this.elementTypeService.GetAvailableTypes();
    }
}
