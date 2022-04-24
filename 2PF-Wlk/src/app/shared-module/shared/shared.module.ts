import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { DialogComponent } from '../components/dialog/dialog.component';
import { TableComponent } from '../components/table/table.component';
import { MaterialHelperModule } from '../material-helper.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { ClubPipe } from '../pipes/club.pipe';
import { CompleteNamePipe } from '../pipes/complete-name.pipe';
import { CalificacionesDirective } from '../directives/calificaciones.directive';
import { CustomDirectiveDirective } from '../directives/custom-directive.directive';

@NgModule({
  declarations: [
    TableComponent,
    DialogComponent,
    NavbarComponent,
    SidebarComponent,
    ClubPipe,
    CompleteNamePipe,
    CalificacionesDirective,
    CustomDirectiveDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialHelperModule,
  ],
  exports: [TableComponent, DialogComponent, NavbarComponent, SidebarComponent,
  ClubPipe, CompleteNamePipe, CalificacionesDirective, CustomDirectiveDirective],
})
export class SharedModule {}
