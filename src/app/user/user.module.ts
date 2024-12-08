import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { RouterModule, Routes } from '@angular/router';
import { ChangeUserPasswordComponent } from './componenet/change-user-password/change-user-password.component';



@NgModule({
  declarations: [
    UserComponent,
    ChangeUserPasswordComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }
