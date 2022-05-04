import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { SharedModule } from 'src/app/shared-module/shared/shared.module';
import { ListadoGeneralComponent } from '../general/listado-general/listado-general.component';
import { MaterialHelperModule } from 'src/app/shared-module/material-helper.module';
import { AddStudentComponent } from '../add-student/add-student.component';


@NgModule({
  declarations: [CoreComponent, ListadoGeneralComponent, AddStudentComponent, ListadoGeneralComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule,
    MaterialHelperModule
  ]
})
export class CoreModule { }
