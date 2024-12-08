import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ChangepasswordComponent } from 'src/app/auth/Components/changepassword/changepassword.component';

@Component({
  selector: 'app-change-user-password',
  templateUrl: './change-user-password.component.html',
  styleUrls: ['./change-user-password.component.scss']
})
export class ChangeUserPasswordComponent {
  constructor(public dialogRef: MatDialogRef<ChangeUserPasswordComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    console.log(data);
    
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  
  changePasswordForm = new FormGroup({
    oldPassword: new FormControl(null, [Validators.required]),
    newPassword: new FormControl(null, [Validators.required]),
    confirmNewPassword: new FormControl(null, [Validators.required]),
    
  })
}
