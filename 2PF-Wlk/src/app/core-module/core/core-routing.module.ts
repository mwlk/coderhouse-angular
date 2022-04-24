import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from 'src/app/shared-module/components/table/table.component';
import { AddStudentComponent } from '../add-student/add-student.component';

const routes: Routes = [
  {
    path: 'listado',
    component: TableComponent,
  },
  {
    path: 'agregar',
    component: AddStudentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
