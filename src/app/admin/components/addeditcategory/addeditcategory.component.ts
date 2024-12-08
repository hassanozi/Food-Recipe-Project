import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-addeditcategory',
  templateUrl: './addeditcategory.component.html',
  styleUrls: ['./addeditcategory.component.scss']
})
export class AddeditcategoryComponent {
  name :string = '';
  constructor(
    public dialogRef: MatDialogRef<AddeditcategoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
