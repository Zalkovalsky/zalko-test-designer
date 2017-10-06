import { Injectable } from '@angular/core';
import { Project } from '../../models/project';
import { BaseElement } from '../../models/base-element';
import { Option } from '../../models/option';
import { ProjectStore } from '../../store/project-store';

// Only available in electron
const electronRemote = require('electron').remote;
const { dialog } = electronRemote;
const electronFs = electronRemote.require('fs');
import fs = require('fs');

@Injectable()
export class ProjectService {

    constructor(private store: ProjectStore) { }

    startNew() {
        let project = new Project();
        project.title = 'Sample';
        project.headerLine1 = 'Name';
        project.headerLine2 = 'Date';
        project.elementsFontSize = 20;
        project.headerFontSize = 26;
        this.store.setCurrent(project);
    }

    loadFromJson(jsonString: string) {
        if (!jsonString) {
            throw new Error('jsonString is required');
        }

        let parsed = JSON.parse(jsonString);

        let project = parsed as Project;

        if (!parsed || !project) {
            throw new Error('Failed to parse JSON string');
        }

        project.elements = project.elements as BaseElement[];

        this.store.setCurrent(project);
    }

    save() {
        if (!dialog) {
            return;
        }

        dialog.showSaveDialog(null, {
            title: 'Save',
            filters: [{name: '', extensions: ['ztdp']}]
        }, (result) => {
            this.saveToPath(result);
        });
    }

    private saveToPath(path: string) {
        if (!path) {
            return;
        }

        let json = JSON.stringify(this.store.getCurrent());
        fs.writeFileSync(path, json, 'UTF-8');
    }
}
