import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './shared-module/components/table/table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './shared-module/components/navbar/navbar.component';
import { DialogComponent } from './shared-module/components/dialog/dialog.component';
import { MaterialHelperModule } from './shared-module/material-helper.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialHelperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
