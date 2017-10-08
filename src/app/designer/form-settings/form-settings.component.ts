import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ProjectStore } from '../../store/project-store';
import { Project } from '../../models/project';

@Component({
    selector: 'form-settings',
    templateUrl: './form-settings.component.html'
})
export class FormSettingsComponent {

    project: Project;

    constructor(private store: ProjectStore) {
        this.project = store.getCurrent();
     }
}
