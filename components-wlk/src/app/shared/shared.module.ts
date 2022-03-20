import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StudentsComponent } from './students/students.component';



@NgModule({
  declarations: [
    ToolbarComponent,
    NavbarComponent,
    StudentsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ToolbarComponent,
    NavbarComponent,
    StudentsComponent
  ]
})
export class SharedModule { }
