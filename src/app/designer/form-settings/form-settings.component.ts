import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { FontSizeBroadcasterService } from './../shared/services/font-size-broadcaster.serivce';
import { ProjectStore } from '../../store/project-store';
import { Project } from '../../models/project';

@Component({
    selector: 'form-settings',
    templateUrl: './form-settings.component.html'
})
export class FormSettingsComponent {

    project: Project;

    constructor(private fontSizeBroadcasterService: FontSizeBroadcasterService, private store: ProjectStore) {
        this.project = store.getCurrent();
     }

    update(event: any) {
        this.store.setCurrent(this.project);
        console.log(this.project);
    }
}
