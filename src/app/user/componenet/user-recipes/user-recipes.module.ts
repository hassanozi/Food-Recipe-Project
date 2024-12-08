import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRecipesRoutingModule } from './user-recipes-routing.module';
import { UserRecipesComponent } from './user-recipes.component';
import { Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { RecipeDetailesComponent } from './recipe-detailes/recipe-detailes.component';

const routes: Routes = [
  
  { path: '', component: UserRecipesComponent }

];
@NgModule({
  declarations: [
    UserRecipesComponent,
    RecipeDetailesComponent
  ],
  imports: [
    CommonModule,
    UserRecipesRoutingModule,
    SharedModule
  ]
})
export class UserRecipesModule { }
