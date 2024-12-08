import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './Components/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { RegisterComponent } from './Components/register/register.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { VerifyAccountComponent } from './Components/verify-account/verify-account.component';
import { ChangepasswordComponent } from './Components/changepassword/changepassword.component';
import { ForgotpasswordComponent } from './Components/forgotpassword/forgotpassword.component';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    VerifyAccountComponent,
    ChangepasswordComponent,
    ForgotpasswordComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }
