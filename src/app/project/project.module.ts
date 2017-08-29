import { NgModule } from '@angular/core';
import {
    MdCoreModule,
    MdButtonModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MdDialogModule
} from '@angular/material';

import { FileDialogComponent } from './file-dialog/file-dialog.component';
import { StartPageComponent } from './start-page/start-page.component';

@NgModule({
    imports: [
        MdCoreModule,
        MdCardModule,
        MdButtonModule,
        MdToolbarModule,
        MdIconModule,
        MdDialogModule
    ],
    declarations: [
        FileDialogComponent,
        StartPageComponent
    ],
    bootstrap: [
    ],
    exports: [
        StartPageComponent
    ],
    entryComponents: [FileDialogComponent]
})
export class ProjectModule { }
