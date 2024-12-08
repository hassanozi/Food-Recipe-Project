import { UserRecipesModule } from './componenet/user-recipes/user-recipes.module';
import { UserRecipesComponent } from './componenet/user-recipes/user-recipes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { ChangeUserPasswordComponent } from './componenet/change-user-password/change-user-password.component';

const routes: Routes = [
  { path: '', component: UserComponent ,children:[
  {path:'recipes', loadChildren:()=> import('../user/componenet/user-recipes/user-recipes.module').then(m => m.UserRecipesModule)},
  {path:'profile', loadChildren:()=> import('../user/componenet/profile/profile.module').then(m => m.ProfileModule)},
  {path:'favorites', loadChildren:()=> import('../user/componenet/favorites/favorites.module').then(m => m.FavoritesModule)},
  {path:'changepassword', component:ChangeUserPasswordComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
