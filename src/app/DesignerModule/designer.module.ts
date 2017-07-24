import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import {
    MdCoreModule,
    MdButtonModule,
    MdIconModule,
    MdSelectModule,
    MdInputModule,
    MdOptionModule,
    MdCardModule,
    MdGridListModule
} from '@angular/material';

import { NewElementComponent } from './components/new-element.component';
import { FormHeaderComponent } from './components/form-header.component';
import { FormElementListComponent } from './components/form-element-list.component';
import { DesignerGridComponent } from './components/designer-grid.component';

import { ElementTypeService } from './services/element-type.service';

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        MdCoreModule,
        MdCardModule,
        MdButtonModule,
        MdIconModule,
        MdSelectModule,
        MdInputModule,
        MdOptionModule,
        MdGridListModule,
        CommonModule
    ],
    declarations: [
        NewElementComponent,
        FormElementListComponent,
        FormHeaderComponent,
        DesignerGridComponent
    ],
    bootstrap: [
        NewElementComponent
    ],
    exports: [
        DesignerGridComponent
    ],
    providers: [
        ElementTypeService
    ]
})
export class DesignerModule { }
