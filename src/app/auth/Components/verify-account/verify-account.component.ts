import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-verify-account',
  templateUrl: './verify-account.component.html',
  styleUrls: ['./verify-account.component.scss']
})
export class VerifyAccountComponent {

  constructor(
    public dialogRef: MatDialogRef<VerifyAccountComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}
  
  verifyForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    code: new FormControl(null, [Validators.required]),
  })


  onNoClick(): void {
    this.dialogRef.close();
  }
}
