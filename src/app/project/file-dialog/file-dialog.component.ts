import { Component, Input } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
    selector: 'file-dialog',
    templateUrl: './file-dialog.component.html'
})
export class FileDialogComponent {

    constructor(public dialogRef: MdDialogRef<FileDialogComponent>) {}

    onFileSelected(file: FileList) {

        let fileReader = new FileReader();

        fileReader.onloadend = (event) => {
            this.dialogRef.close(fileReader.result);
        };

        fileReader.readAsText(file[0], 'UTF-8');
    }
}
