import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../Services/auth.service';
import { VerifyAccountComponent } from '../verify-account/verify-account.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private _Router:Router, public dialog: MatDialog,private _AuthService: AuthService, private toastr: ToastrService) { }

  hide: boolean = true;
  confirmHide: boolean = true;
  isLoading: boolean = false;
  imgSrc:any;

  registerForm = new FormGroup({
    userName: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    phoneNumber: new FormControl(null, [Validators.required]),
    country: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$')]),
    confirmPassword: new FormControl(null, [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$')]),
  })


  onSubmit(data: FormGroup) {
    this.isLoading = true;

    let myData = new FormData();
    myData.append('userName', data.value.userName);
    myData.append('email', data.value.email);
    myData.append('phoneNumber', data.value.phoneNumber);
    myData.append('country', data.value.country);
    myData.append('password', data.value.password);
    myData.append('confirmPassword', data.value.confirmPassword);
    myData.append('profileImage', this.imgSrc);


    this._AuthService.onRegister(myData).subscribe({
      next: (res: any) => {
        console.log(res);

        localStorage.setItem('userToken', res.token)
      }, error: (err: any) => {
        this.isLoading = false;
        console.log(err);
        this.toastr.error(err.error.message, 'Error');
      },
      complete: () => {
        this.toastr.success('You successfully Loggedin', 'Success');
        this.isLoading = false;
        this.openDialog();
      }
    });
  }

  files: File[] = [];

  onSelect(event:any) {
    console.log(event);
    this.imgSrc = event.addedFiles[0];
    this.files.push(...event.addedFiles);
  }

  onRemove(event:any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  openDialog(){
    const dialogRef = this.dialog.open(VerifyAccountComponent, {
      data: {name: ''},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
    
      if (result) {
        this.onVerifyAccount(result);
      }
    });
  }

  onVerifyAccount(data:any){
    this._AuthService.onVerify(data).subscribe({
      next:(res)=>{
        console.log(res);
      },error:(err)=>{
        this.toastr.error(err.error.message, 'Error');
      },complete:()=>{
        this.toastr.success('Account is successfully Activated', 'Success');
        this._Router.navigate(['/auth/login']);
      }
    })
  }
}
