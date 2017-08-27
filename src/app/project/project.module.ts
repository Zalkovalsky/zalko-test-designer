import { NgModule } from '@angular/core';
import {
    MdCoreModule,
    MdButtonModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule
} from '@angular/material';

import { StartPageComponent } from './start-page/start-page.component';

@NgModule({
    imports: [
        MdCoreModule,
        MdCardModule,
        MdButtonModule,
        MdToolbarModule,
        MdIconModule
    ],
    declarations: [
        StartPageComponent
    ],
    bootstrap: [
    ],
    exports: [
        StartPageComponent
    ]
})
export class ProjectModule { }
