import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { HomeComponent } from './home/home.component';
import { AuxMaterialModulesModule } from '../aux-material-modules/aux-material-modules.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    AuxMaterialModulesModule
  ]
})
export class ViewsModule { }
