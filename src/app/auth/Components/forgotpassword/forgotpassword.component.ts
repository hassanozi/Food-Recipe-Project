import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent {
  forgotPasswordForm = new FormGroup({
    email: new FormControl(null,[Validators.required, Validators.email]),
  })

  

  constructor(private _AuthService:AuthService, private _ToastrService:ToastrService,private _Router:Router){
  }

  onSubmit(data:FormGroup){
    
    console.log(data);
    this._AuthService.onForgotPassword(data.value).subscribe({
      next:(res)=>{
        console.log(res);
      },
      error:(err:any)=>{
      },
      complete:()=>{
        
        this._ToastrService.success('Email Reset Successfully','Success')
        this._Router.navigate(['/auth/changepassword'])

      }
    })
  }

}
