import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent }  from './app.component';
import { DesignerModule } from './designer/designer.module';

import {DesignerGridComponent} from './designer/designer-grid/designer-grid.component';

@NgModule({
  imports:      [ BrowserModule,
                  BrowserAnimationsModule,
                  DesignerModule,
                  RouterModule.forRoot([
                    {path: '', component: DesignerGridComponent}
                  ]) ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
