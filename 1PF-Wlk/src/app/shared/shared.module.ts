import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AuxMaterialModulesModule } from '../aux-material-modules/aux-material-modules.module';



@NgModule({
  declarations: [
    ToolbarComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    AuxMaterialModulesModule
  ],
  exports: [
    ToolbarComponent,
    SidenavComponent
  ]
})
export class SharedModule { }
