import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './Guards/auth.guard';

const routes: Routes = [
  {path: '', redirectTo:'auth', pathMatch:'full'},
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'dashboard',canActivate:[authGuard], loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  // { path: 'users', loadChildren: () => import('./admin/components/users/users.module').then(m => m.UsersModule) },
  // { path: 'user-recipes', loadChildren: () => import('./user/componenet/user-recipes/user-recipes.module').then(m => m.UserRecipesModule) },
  // { path: 'favorites', loadChildren: () => import('./user/componenet/favorites/favorites.module').then(m => m.FavoritesModule) },
  // { path: 'profile', loadChildren: () => import('./user/componenet/profile/profile.module').then(m => m.ProfileModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
