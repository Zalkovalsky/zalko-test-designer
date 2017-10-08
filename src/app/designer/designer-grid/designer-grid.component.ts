import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ProjectService } from '../../core/services/project.service';
import { DialogService } from '../../core/services/dialog-service';

@Component({
    selector: 'designer-grid',
    templateUrl: './designer-grid.component.html',
    styleUrls: ['./../designer-module.style.css']
})
export class DesignerGridComponent {

    constructor(
        private projectService: ProjectService,
        private location: Location,
        private dialogService: DialogService) { }

    print() {
        window.print();
    }

    quit() {
        this.dialogService.confirmAsync('Do you want to quit designer?')
            .then((quitConfirmed) => {
                if (!quitConfirmed) {
                    return;
                }

                this.confirmAndSaveAsync()
                    .then(() => this.location.back());
            })
            .catch((failReason) => this.onSaveFailed(failReason));
    }

    save() {
        this.saveAsync()
            .catch((failReason) => this.onSaveFailed(failReason));
    }


    private confirmAndSaveAsync(): Promise<void> {
        return this.dialogService.confirmAsync('Do you wish do save your changes?')
            .then((save) => {
                if (save) {
                    return this.saveAsync();
                }
            });
    }

    private saveAsync(): Promise<void> {
        return this.dialogService.showSaveDialogAsync(['ztdp'])
            .then((path) => {
                if (path) {
                    return this.projectService.saveAsync(path);
                }
            });
    }

    private onSaveFailed(reason: any) {
        alert('Failed to save, reason: ' + reason);
    }
}
