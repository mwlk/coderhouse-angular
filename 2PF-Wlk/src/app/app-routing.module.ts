import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from './core-module/core/core.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'admin',
    component: CoreComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('src/app/core-module/core/core.module').then(
            (m) => m.CoreModule
          ),
      },
    ],
  },
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('src/app/auth-module/auth/auth.module').then(
            (m) => m.AuthModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
