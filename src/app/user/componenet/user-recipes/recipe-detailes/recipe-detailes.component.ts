import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-recipe-detailes',
  templateUrl: './recipe-detailes.component.html',
  styleUrls: ['./recipe-detailes.component.scss']
})
export class RecipeDetailesComponent {

  imagePath : string = 'https://upskilling-egypt.com:3006/';
  dummyImage :string = '../../../../assets/images/recipe-title.png';
  
  constructor(
    public dialogRef: MatDialogRef<RecipeDetailesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    console.log(data);
    
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  id? : number;
}
