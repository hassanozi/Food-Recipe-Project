import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { RouterModule,Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxDropzoneModule } from 'ngx-dropzone';

// const routes: Routes = [
  
//   { path: '', component: ProfileComponent }

// ];

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,SharedModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
