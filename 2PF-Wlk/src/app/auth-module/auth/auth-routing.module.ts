import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login/login.component';
import { AppGuard } from './guard/app.guard';

const routes: Routes = [{
  path: 'login',
  component: LoginComponent,
  canActivate: [AppGuard]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
