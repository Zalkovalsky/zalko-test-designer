import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MdDialog} from '@angular/material';
import {FileDialogComponent} from './../file-dialog/file-dialog.component';

@Component({
    selector: 'start-page',
    templateUrl: './start-page.component.html',
    styleUrls: ['./../project.module.styles.css']
})
export class StartPageComponent {
    constructor(private router: Router, private dialog: MdDialog) { }

    startNew() {
        this.router.navigateByUrl('designer');
    }

    loadProject() {
        let dialogRef = this.dialog.open(FileDialogComponent);
        dialogRef.afterClosed().subscribe(result => {
            console.log('closed dialog, result: ' + result); 

        });     
    }
}
