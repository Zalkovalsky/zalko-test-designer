import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MdDialog } from '@angular/material';
import { FileDialogComponent } from './../file-dialog/file-dialog.component';
import { Project } from '../../models/project';
import { ProjectService } from '../../core/services/project.service';

@Component({
    selector: 'start-page',
    templateUrl: './start-page.component.html',
    styleUrls: ['./../project.module.styles.css']
})
export class StartPageComponent {
    constructor(private router: Router, private dialog: MdDialog, private projectService: ProjectService) { }

    startNew() {
        this.projectService.startNew();
        this.toDesigner();
    }

    loadProject() {
        let dialogRef = this.dialog.open(FileDialogComponent);
        dialogRef.afterClosed().subscribe(result => {
            this.projectService.loadFromJson(result);
            this.toDesigner();
        });
    }

    private toDesigner() {
        this.router.navigateByUrl('designer');
    }
}
