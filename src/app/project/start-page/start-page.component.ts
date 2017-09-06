import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MdDialog } from '@angular/material';
import { FileDialogComponent } from './../file-dialog/file-dialog.component';
import { ProjectStore } from '../../store/project-store';
import { Project } from '../../models/project';

@Component({
    selector: 'start-page',
    templateUrl: './start-page.component.html',
    styleUrls: ['./../project.module.styles.css']
})
export class StartPageComponent {
    constructor(private router: Router, private dialog: MdDialog, private store: ProjectStore) { }

    startNew() {
        let project = new Project();
        project.title = 'Sample';
        project.headerLine1 = 'Name';
        project.headerLine2 = 'Date';
        project.elementsFontSize = 20;
        project.headerFontSize = 26;
        this.store.setCurrent(project);
        
        this.router.navigateByUrl('designer');
    }

    loadProject() {
        let dialogRef = this.dialog.open(FileDialogComponent);
        dialogRef.afterClosed().subscribe(result => {
            console.log('closed dialog, result: ' + result);
        });
    }
}
