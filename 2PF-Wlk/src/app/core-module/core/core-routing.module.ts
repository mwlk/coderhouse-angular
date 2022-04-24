import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from 'src/app/shared-module/components/table/table.component';
import { AddStudentComponent } from '../add-student/add-student.component';
import { ListadoGeneralComponent } from '../general/listado-general/listado-general.component';

const routes: Routes = [
  {
    path: 'listado',
    component: TableComponent,
  },
  {
    path: 'agregar',
    component: AddStudentComponent,
  },{
    path: 'general',
    component: ListadoGeneralComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
