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
                this.dialogService.confirmAsync('Do you wish do save your changes?')
                    .then((save) => {
                        if (save) {
                            return this.projectService.saveAsync();
                        }
                        return Promise.resolve(true);

                    }).then(() => {
                        this.location.back();
                    }, (reason) => {
                        this.onSaveFailed(reason);
                    });
            });
    }

    save() {
        this.projectService.saveAsync()
            .catch((reason) => {
                this.onSaveFailed(reason);
            });
    }

    private onSaveFailed(reason: any) {
        alert('Failed to save, reason: ' + reason);
    }
}
