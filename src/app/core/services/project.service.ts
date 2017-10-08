import { Injectable } from '@angular/core';
import { Project } from '../../models/project';
import { BaseElement } from '../../models/base-element';
import { Option } from '../../models/option';
import { ProjectStore } from '../../store/project-store';

// Only available in electron
const electronRemote = require('electron').remote;
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

    saveAsync(filePath: string): Promise<void> {
        return new Promise<void>((resolverFn, rejectFn) => {
            if (!filePath) {
                rejectFn('File path has to be specified');
            }

            this.saveToPathAsync(filePath)
                .then(() => resolverFn());
        });
    }

    private saveToPathAsync(path: string): Promise<void> {
        return new Promise<void>((resolverFn, rejectFn) => {
            if (!path) {
                rejectFn('File path has to be specified');
            }

            let json = JSON.stringify(this.store.getCurrent());
            fs.writeFileSync(path, json, 'UTF-8');
            resolverFn();
        });
    }
}
