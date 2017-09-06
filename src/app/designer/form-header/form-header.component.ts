import { Component, OnInit } from '@angular/core';
import { ProjectStore } from '../../store/project-store';
import { Project } from '../../models/project';

@Component({
    selector: 'form-header',
    templateUrl: './form-header.component.html'
})
export class FormHeaderComponent implements OnInit {

    project: Project;

    constructor(public store: ProjectStore) { }

    ngOnInit() {
        this.project = this.store.getCurrent();
    }

    update(event: any) {
        this.store.setCurrent(this.project);
    }
}
