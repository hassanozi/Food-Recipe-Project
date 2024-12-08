import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router:Router, private _AuthService: AuthService, private toastr: ToastrService) { }

  hide:boolean = true;
  isLoading:boolean=false;

  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$')])
  })


  onSubmit(data: FormGroup) {
    this.isLoading=true;
    this._AuthService.onLogin(data.value).subscribe({
      next: (res: any) => {
        console.log(res);

        localStorage.setItem('userToken', res.token);

        this._AuthService.getProfile();

      }, error:(err:any)=>{
        this.isLoading=false;
        console.log(err);
        this.toastr.error(err.error.message,'Error');
      },
      complete:()=>{
        this.toastr.success('You successfully Loggedin','Success');
        this.isLoading=false;
        this.router.navigate(['/dashboard/home'])
      }
    });
  }
}
