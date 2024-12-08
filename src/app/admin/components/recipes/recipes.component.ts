import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { ToastrService } from 'ngx-toastr';
import { ICategory } from 'src/app/models/category';
import { DeleteComponent } from 'src/app/shared/delete/delete.component';
import { CategoryService } from '../../services/category.service';
import { AddeditcategoryComponent } from '../addeditcategory/addeditcategory.component';
import { RecipesService } from '../../services/recipes.service';
import { HelperService } from 'src/app/shared/service/helper.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent {
  
  imagePath: string= 'https://upskilling-egypt.com:3006/';
  dummyImage:string='../../../../assets/images/recipes.jpg'

  tableData:any[]=[];
  tableResponse:any;
  searchkey:string ='';
  tags:any[]=[];
  categories:ICategory[]=[];
  tagId:number=0
  categoryId:number=0

  length = 50;
  pageSize = 5;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];
  pageEvent?: PageEvent;
    showPageSizeOptions = true;
    showFirstLastButtons = true;

  constructor(private _CategoryService:CategoryService,private _HelperService:HelperService, private _RecipesService:RecipesService,private dialog: MatDialog, private _ToastrService:ToastrService ){}
  

  ngOnInit(): void{
    this.getRecipes();
    this.getAllTags();
    this.getAllcategories();
  }
  searchByName(){}

  getRecipes() {

    let paramsApi = {
      pageSize : this.pageSize,
      pageNumber:this.pageIndex,
      name:this.searchkey,
      tagId : this.tagId > 0 ? this.tagId : null,
      categoryId : this.categoryId > 0 ? this.categoryId : null
    }

    this._RecipesService.getAllRecipes(paramsApi).subscribe({
      next: (res) => {
        console.log(res);
        this.tableResponse = res;
        this.tableData = res.data;
      }
    })
  }

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.getRecipes();
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }
  
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

  openDeleteCategoryDialog(categoryData:any){
    console.log(categoryData)
    const dialogRef = this.dialog.open(DeleteComponent, {
      data:categoryData
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result)
      if(result){
        this.deleteCategory(result);
        
      }
    });
  }

  deleteCategory(categoryId:any){
    this._RecipesService.onDeleteRecipe(categoryId).subscribe({
      next:(res) => {
        console.log(res);
      },error:()=>{

      },complete:()=> {
          this.getRecipes();
          this._ToastrService.info('Deleted Successfuly')
      },
    })
  }
  
  // openAddCategoryDialog(){
  //   const dialogRef = this.dialog.open(AddeditcategoryComponent, {
  //     // data: {name: this.name, animal: this.animal},
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(result);
  //     if (result) {
  //       this.addCategory(result);
  //     }
  //   });
  // }

  // openEditCategoryDialog(CategoryData:any){
  //   console.log(CategoryData);
    
  //   const dialogRef = this.dialog.open(AddeditcategoryComponent, {
  //     data: {name: CategoryData.name, id: CategoryData.id},
  //     // data: CategoryData
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(result);
  //     if (result) {
  //       this.editCategory(result);
  //     }
  //   });
  // }

  // openDeleteCategoryDialog(CategoryData:any){
  //   const dialogRef = this.dialog.open(DeleteComponent, {
  //     // data: {name: this.name, animal: this.animal},
  //     data: CategoryData
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(result);
  //     if (result) {
  //       this.deleteCategory(result);
  //     }
  //   });
  // }

  // addCategory(categoryName:string){
  //   this._RecipesService.onAddCategory(categoryName).subscribe({
  //     next:(res)=>{
  //       console.log(res);
  //     },error:()=>{

  //     },complete:()=>{
  //       this._ToastrService.success('Add Successfuly')
  //       this.getCategories();
  //     }
  //   })
  // }

  // editCategory(categoryItem:any){
  //   this._RecipesService.onEditCategory(categoryItem).subscribe({
  //     next:(res)=>{
  //       console.log(res);
  //     },error:()=>{

  //     },complete:()=>{
  //       this._ToastrService.success('edit Successfuly')
  //       this.getCategories();
  //     }
  //   })
  // }

  // deleteCategory(categoryId:any){
  //   this._RecipesService.onDeleteCategory(categoryId).subscribe({
  //     next:(res)=>{
  //       console.log(res);
  //     },error:()=>{

  //     },complete:()=>{
  //       this._ToastrService.info('Deleted Successfuly')
  //       this.getCategories();
  //     }
  //   })
  // }
}
