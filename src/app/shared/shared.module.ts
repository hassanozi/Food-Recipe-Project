import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule} from '@angular/material/dialog';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { DeleteComponent } from './delete/delete.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';
import { NgxDropzoneModule } from 'ngx-dropzone';


@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule,ReactiveFormsModule,MatDialogModule,MatIconModule,MatMenuModule,MatButtonModule,RouterModule,
    MatPaginatorModule,FormsModule,MatSelectModule,
    NgxDropzoneModule
  ],
  exports:[CommonModule, ReactiveFormsModule,MatDialogModule, SidebarComponent, 
    NavbarComponent,MatIconModule,MatMenuModule,MatButtonModule,RouterModule,MatPaginatorModule,FormsModule,
    DeleteComponent,MatSelectModule,
    NgxDropzoneModule]
})
export class SharedModule { }
