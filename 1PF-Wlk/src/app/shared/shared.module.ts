import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CustomPipePipe } from '../pipes/custom-pipe.pipe';
import { CustomDirectiveDirective } from '../directives/custom-directive.directive';
import { ClubPipe } from '../pipes/club.pipe';
import { CalificacionesDirective } from '../directives/calificaciones.directive';
import { CreateFormComponent } from './create-form/create-form.component';

@NgModule({
  declarations: [
    ToolbarComponent,
    NavbarComponent,
    ContentComponent,

    CustomPipePipe,
    CustomDirectiveDirective,
    ClubPipe,
    CalificacionesDirective,
    CreateFormComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
  ],
  exports: [
    ToolbarComponent,
    NavbarComponent,
    ContentComponent,

    CreateFormComponent,
  ],
})
export class SharedModule {}
