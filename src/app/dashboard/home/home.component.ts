import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/Services/auth.service';

interface role {
  isActive:boolean;
  text:string;
  icon:string;
  textSpan:string;
  paragraph:string;
  buttonName:string;
  link:string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  userName = localStorage.getItem('userName');

  constructor(private _AuthService:AuthService){

  }

  isAdmin():boolean{
    console.log(this._AuthService.role)
   return this._AuthService.role == 'SuperAdmin' ? true:false;
  }
  isUser():boolean{
    console.log(this._AuthService.role)
    return this._AuthService.role == 'SystemUser' ? true:false;
   }

   role : role[]= [
    {
      text:"Fill The",
      icon:"fa-solid fa-arrow-right",
      textSpan:"Recipe",
      paragraph:"you can now fill the meals easily using the table and form , click here and sill it with the table !",
      buttonName:"Fill Recipe",
      link:"/dashboard/admin/recipes",
      isActive:this.isAdmin()
    },
    {
      text:"Show All",
      icon:"fa-solid fa-arrow-right",
      textSpan:"Recipes",
      paragraph:"you can now show the meals easily using this button, click here and sill it with the table !",
      buttonName:"Go To Recipes",
      link:"/dashboard/user/recipes",
      isActive:this.isUser()
    }
   ]
}
