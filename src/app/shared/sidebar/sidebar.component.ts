import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/Services/auth.service';

interface Menu{
  text:string;
  link:string;
  icon:string;
  isActive:boolean;
}


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  constructor(private _AuthService:AuthService){}

  isAdmin():boolean{
    return this._AuthService.role == 'SuperAdmin'?true:false;
  }
  isUser():boolean{
    return this._AuthService.role == 'SystemUser'?true:false;
  }

  Menu : Menu[] =[
    {
    text:'Home',
    link:'/dashboard/home',
    icon:"fa-solid fa-house",
    isActive:this.isAdmin() || this.isUser()
  },
  {
    text:'Users',
    link:'/dashboard/admin/users',
    icon:"fa-solid fa-users",
    isActive:this.isAdmin()
  },
  {
    text:'User Recipes',
    link:'/dashboard/user/recipes',
    icon:'fa-solid fa-user',
    isActive:this.isUser()},
  {
    text:'Favorites',
    link:'/dashboard/user/favorites',
    icon:"fa-solid fa-heart",
    isActive:this.isUser()
  },
  {
    text:'Recipes',
    link:'/dashboard/admin/recipes',
    icon:"fa-solid fa-receipt",
    isActive:this.isAdmin()
  },
  {
    text:"Categories",
    link:'/dashboard/admin/category',
    icon:"fa-solid fa-layer-group",
    isActive:this.isAdmin()
  }
]




}
