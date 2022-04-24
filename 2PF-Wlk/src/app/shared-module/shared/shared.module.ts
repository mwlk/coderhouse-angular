import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { DialogComponent } from '../components/dialog/dialog.component';
import { TableComponent } from '../components/table/table.component';
import { MaterialHelperModule } from '../material-helper.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [TableComponent, DialogComponent, NavbarComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialHelperModule
  ],
  exports: [
    TableComponent,
    DialogComponent,
    NavbarComponent
  ]
})
export class SharedModule { }
