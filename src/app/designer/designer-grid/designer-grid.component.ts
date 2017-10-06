const {dialog} = require('electron').remote

import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ProjectService } from '../../core/services/project.service';

@Component({
    selector: 'designer-grid',
    templateUrl: './designer-grid.component.html',
    styleUrls: ['./../designer-module.style.css']
})
export class DesignerGridComponent {

    constructor(private projectService: ProjectService, private location: Location) { }

    print() {
        window.print();
    }

    quit() {
        let isConfirmed = confirm('Do you want to quit designer?');

        if (!isConfirmed) {
            return;
        }

        let saveChanges = confirm('Do you wish to save your changes?');

        if (saveChanges) {
            this.projectService.save();
        }

        this.location.back();
    }

    save() {
        this.projectService.save();
    }
}
