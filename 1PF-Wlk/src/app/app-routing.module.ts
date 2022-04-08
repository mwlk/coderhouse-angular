import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './container/default-layout/default-layout.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "inicio",
    pathMatch: "full"
  },
  {
    path: "",
    component: DefaultLayoutComponent,
    children: [
      {
        path: "inicio",
        loadChildren: () => import("./views/views.module").then((m) => m.ViewsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
