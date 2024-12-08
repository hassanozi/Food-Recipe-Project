import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { ILogin } from 'src/app/models/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  // token = localStorage.getItem('userToken');
  role:string | any='';

  constructor(private _HttpClient : HttpClient,private _Router:Router) { 

    if (localStorage.getItem('userToken') !== null) {
      this.getProfile();
    }
  }


  getProfile(){
    let encoded:any= localStorage.getItem('userToken');
    let decoded:any=jwtDecode(encoded);

    localStorage.setItem('userRole',decoded.userGroup);
    localStorage.setItem('userName',decoded.userName);

    this.getRole();
  }

  getRole(){
    if (localStorage.getItem('userToken')!== null && localStorage.getItem('userRole')!== null) {
      this.role = localStorage.getItem('userRole');
    }
  }

  onLogin(data:ILogin){
    return this._HttpClient.post('Users/Login', data)
  }

  onRegister(data:any){
    return this._HttpClient.post('Users/Register', data)
  }

  onVerify(data:any){
    return this._HttpClient.put('Users/varify', data)
  }

  onChangePassword(data: any){
    return this._HttpClient.post('Users/Reset', data)
  }

  onForgotPassword(data: any){
    return this._HttpClient.post('Users/Reset/Request', data)
  }

  logout(){
    localStorage.removeItem('userToken');
    localStorage.removeItem('userRole');
    localStorage.removeItem('userName');
    this._Router.navigate(['auth/login'])
  }
}
