import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritesRoutingModule } from './favorites-routing.module';
import { FavoritesComponent } from './favorites.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  { path: '', component: FavoritesComponent }

];

@NgModule({
  declarations: [
    FavoritesComponent
  ],
  imports: [
    CommonModule,
    FavoritesRoutingModule,
    RouterModule.forChild(routes)
  ]
})
export class FavoritesModule { }
