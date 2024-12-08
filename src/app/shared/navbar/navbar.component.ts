import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth/Services/auth.service';
import { ChangeUserPasswordComponent } from 'src/app/user/componenet/change-user-password/change-user-password.component';
import { UserService } from 'src/app/user/services/user.service';

interface Menu{
  text:string;
  link:string;
  icon:string;
  isActive:boolean;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  userName = localStorage.getItem('userName');

  constructor(private dialog: MatDialog,private _AuthService: AuthService, private _Router: Router, 
    private _UserService:UserService, private _ToastrService:ToastrService) { }


    getCurrentUser() {
      this._Router.navigate(['/dashboard/user/profile']);
    }
  
  
  openChangePasswordDialog() {
    const dialogRef = this.dialog.open(ChangeUserPasswordComponent, {
      // data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        this.onChangePassword(result);
      }
    });
  }

  onChangePassword(userdata:any){
    this._UserService.changePassword(userdata).subscribe({
      next:(res)=>{
        console.log(res);
      },error:()=>{

      },complete:()=>{
        this._ToastrService.success('Saved Successfuly')
      }
    })
  }


  myLogout() {
    this._AuthService.logout();
  }
}
