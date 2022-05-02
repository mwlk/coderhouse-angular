import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppGuard } from 'src/app/auth-module/auth/guard/app.guard';
import { TableComponent } from 'src/app/shared-module/components/table/table.component';
import { AddStudentComponent } from '../add-student/add-student.component';
import { ListadoGeneralComponent } from '../general/listado-general/listado-general.component';

const routes: Routes = [
  {
    path: '',
    component: TableComponent,
    canActivate: [AppGuard]
  },
  {
    path: 'agregar',
    component: AddStudentComponent,
    canActivate: [AppGuard]
  },{ 
    path: 'general',
    component: ListadoGeneralComponent,
    canActivate: [AppGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
