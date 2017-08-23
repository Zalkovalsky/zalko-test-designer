import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { FontSizeBroadcasterService } from './../services/font-size-broadcaster.serivce';

@Component({
    selector: 'form-settings',
    templateUrl: './form-settings.component.html'
})
export class FormSettingsComponent {

    gridElementsSize = 18;

    constructor(private fontSizeBroadcasterService: FontSizeBroadcasterService) { }

    onGridFontSize() {
        this.changeSize();
    }
    changeSize() {
        this.fontSizeBroadcasterService.changeGridElementsFontSize(this.gridElementsSize);
    }
}
