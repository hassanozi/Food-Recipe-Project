import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/admin/services/category.service';
import { RecipesService } from 'src/app/admin/services/recipes.service';
import { ICategory } from 'src/app/models/category';
import { HelperService } from 'src/app/shared/service/helper.service';

@Component({
  selector: 'app-add-edit-recipe',
  templateUrl: './add-edit-recipe.component.html',
  styleUrls: ['./add-edit-recipe.component.scss']
})
export class AddEditRecipeComponent {

  tags:any[]=[];
  categories:ICategory[]=[]
  recipeId :number=0
  imgUrl:string='https://upskilling-egypt.com:3006/'
  imgSrc:any;
  files: File[] = [];
  recipeData:any;
  ids: number[] = [];

  constructor(private router: Router,private _ActivatedRoute:ActivatedRoute,private _router:Router,private _CategoryService:CategoryService,private _HelperService:HelperService,
    private dialog:MatDialog,private _RecipesService:RecipesService,private _ToastrService:ToastrService){
      console.log(this.recipeId);
    this.recipeId = _ActivatedRoute.snapshot.params['id']
    
    }

  ngOnInit(): void {
    this.getAllTags();
    this.getAllcategories();
    if(this.recipeId){
      this.getRecipeById(this.recipeId);
    }
    
}

  recipeForm = new FormGroup({
    name : new FormControl(null),
    description : new FormControl(null),
    price : new FormControl(null),
    tagId : new FormControl(null),
    recipeImage: new FormControl(null),
    categoriesIds : new FormControl(null),
  })


  getAllTags(){
    this._HelperService.getTags().subscribe({
      next:(res)=>{
        console.log(res)
        this.tags = res;
      },
  
    })
  }

  getAllcategories(){
    this._CategoryService.getAllCategories(1000,1,'').subscribe({
      next:(res)=>{
        console.log(res)
        this.categories = res.data;
      },
  
    })
  }

  onSelect(event:any) {
    console.log(event);
    // debugger
    this.imgSrc=event.addedFiles[0];
    this.recipeForm.get('recipeImage')?.setValue(this.imgSrc);
    this.files.push(...event.addedFiles);
  }

  onRemove(event:any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  onSubmit(data: FormGroup) {
    console.log(data.value);
    data.value.id = this.recipeId;
    let MyData = new FormData();
    MyData.append('name', data.value.name);
    MyData.append('description', data.value.description);
    MyData.append('price', data.value.price);
    MyData.append('tagId', data.value.tagId);
    MyData.append('categoriesIds', data.value.categoriesIds);
    MyData.append('recipeImage', this.imgSrc,this.imgSrc.name);

    if (this.recipeId) {
      MyData.append('id',data.value.id);
        this.editRecipe(MyData);
    } else {
      this.addRecipe(MyData);
    }


  }

  addRecipe(data:any){
    this._RecipesService.onAddRecipe(data).subscribe({
      next: (res) => {
        console.log(res)
      }, error: () => {

      }, complete: () => {
        this._ToastrService.success('Added Successfully');
        this.router.navigate(['/dashboard/admin/recipes'])
      }
    })
  }

  editRecipe(data:any){
    this._RecipesService.onEditRecipe(this.recipeId,data).subscribe({
      next: (res) => {
        console.log(res)
      }, error: () => {

      }, complete: () => {
        this._ToastrService.success('Edit Successfully');
        this.router.navigate(['/dashboard/admin/recipes'])
      }
    })
  }



  getRecipeById(id:number){
    this._RecipesService.getRecipeById(id).subscribe({
      next:(res)=>{

        console.log(res)
        this.recipeData=res

      },
      error:()=>{
        
      },
      complete:()=>{
        let arr :any[]=[...this.recipeData.category]
        this.ids = arr.map(x => x.id);
        this.imgSrc = this.imgUrl+this.recipeData.imagePath
        this.recipeForm.patchValue({
          name:this.recipeData.name,
          description:this.recipeData.description ,
          price:this.recipeData.price,
          tagId: this.recipeData.tag.id,
          recipeImage:this.recipeData.recipeImage ,
          categoriesIds: this.recipeData.category.map((x:any)=>x.id),

        })
        
      }

    })
  }

}
