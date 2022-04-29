import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from '../login/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialHelperModule } from 'src/app/shared-module/material-helper.module';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    MaterialHelperModule
  ]
})
export class AuthModule { }
