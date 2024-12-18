import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _HttpClient:HttpClient) { }

  getAllUsers(x:any):Observable<any>{
    return this._HttpClient.get('Users',{params:x});
  }

  getUserById(id:number):Observable<any>{
    return this._HttpClient.get(`Users/${id}`);
  }

  onDeleteUser(id:number):Observable<any>{
    return this._HttpClient.delete(`Users/${id}`,)
  
  }
}
