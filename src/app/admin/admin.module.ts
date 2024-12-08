import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { AddeditcategoryComponent } from './components/addeditcategory/addeditcategory.component';
import { RecipesComponent } from './components/recipes/recipes.component';


@NgModule({
  declarations: [
    AdminComponent,
    CategoriesComponent,
    AddeditcategoryComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
