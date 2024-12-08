import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent {
  tableData:any;
  tableRecipe:any[]=[];
  imagePath : string = 'https://upskilling-egypt.com:3006/';
  // dummyImage:string='../../../../assets/images/recipes.jpg';
  dummyImage :string = '../../../../assets/images/recipe-title.png';
  

  constructor(private _UserService:UserService,private _ToastrService:ToastrService){}

  ngOnInit(): void {
    this.getMyFavs()
  }

  getMyFavs(){
    this._UserService.getFavs().subscribe({
      next:(res)=>{
        console.log(res);
        this.tableRecipe = res.data;
      }
    })
  }

  removeItem(id:number){
    this._UserService.onRemoveFromFav(id).subscribe({
      next:(res)=>{
        console.log(res);
        
      },error:()=>{

      },complete:()=>{
        this._ToastrService.success('Deleted Successfully');
        this.getMyFavs();
      }
    })
  }
}
