import { NgModule } from '@angular/core';

import { StartPageComponent } from './start-page/start-page.component';

@NgModule({
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
