import { Component, OnInit } from '@angular/core';

import { ElementTypeService,TypeSelection } from '../services/element-type.service';
import { NewElementService } from '../services/new-element.service';
import { ElementType } from '../models/element-type';


@Component({
    selector: 'new-element',
    templateUrl: './new-element.component.html',
})
export class NewElementComponent implements OnInit {
    availableTypes: TypeSelection[];
    selectedType: TypeSelection;

    constructor(private elementTypeService: ElementTypeService,
        private newElementService: NewElementService) { }

    ngOnInit(): void {
        this.availableTypes = this.elementTypeService.GetAvailableTypes();
    }

    addSelected() {
        if (!this.selectedType) {
            console.error('No type selected');
            return;
        }

        let type = this.selectedType.type;
        this.newElementService.add(type);
    }
}
