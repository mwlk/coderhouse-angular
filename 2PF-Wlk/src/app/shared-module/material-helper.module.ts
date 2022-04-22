import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [],
  imports: [
    // CommonModule,
    // MatCardModule
  ],exports: [
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatTableModule,
    MatListModule
  ]
})
export class MaterialHelperModule { }
