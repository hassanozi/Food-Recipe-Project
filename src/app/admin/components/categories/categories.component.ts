import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { ICategory } from 'src/app/models/category';
import { AddeditcategoryComponent } from '../addeditcategory/addeditcategory.component';
import { DeleteComponent } from 'src/app/shared/delete/delete.component';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit{

  tableData:ICategory[]=[];
  tableResponse:any;
  searchkey:string ='';

  length = 50;
  pageSize = 5;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];
  pageEvent?: PageEvent;
    showPageSizeOptions = true;
    showFirstLastButtons = true;

  constructor(private _CategoryService:CategoryService,private dialog: MatDialog, private _ToastrService:ToastrService ){}
  

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    this._CategoryService.getAllCategories(this.pageSize,this.pageIndex,this.searchkey).subscribe({
      next:(res)=> {
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
    this.getCategories();
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }
  
  openAddCategoryDialog(){
    const dialogRef = this.dialog.open(AddeditcategoryComponent, {
      data: '',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        this.addCategory(result);
      }
    });
  }

  openEditCategoryDialog(CategoryData:any){
    console.log(CategoryData);
    
    const dialogRef = this.dialog.open(AddeditcategoryComponent, {
      data: {name: CategoryData.name, id: CategoryData.id},
      // data: CategoryData
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        this.editCategory(result);
      }
    });
  }

  openDeleteCategoryDialog(CategoryData:any){
    const dialogRef = this.dialog.open(DeleteComponent, {
      // data: {name: this.name, animal: this.animal},
      data: CategoryData
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        this.deleteCategory(result);
      }
    });
  }

  addCategory(categoryName:string){
    this._CategoryService.onAddCategory(categoryName).subscribe({
      next:(res)=>{
        console.log(res);
      },error:()=>{

      },complete:()=>{
        this._ToastrService.success('Add Successfuly')
        this.getCategories();
      }
    })
  }

  editCategory(categoryItem:any){
    this._CategoryService.onEditCategory(categoryItem).subscribe({
      next:(res)=>{
        console.log(res);
      },error:()=>{

      },complete:()=>{
        this._ToastrService.success('edit Successfuly')
        this.getCategories();
      }
    })
  }

  deleteCategory(categoryId:any){
    this._CategoryService.onDeleteCategory(categoryId).subscribe({
      next:(res)=>{
        console.log(res);
      },error:()=>{

      },complete:()=>{
        this._ToastrService.info('Deleted Successfuly')
        this.getCategories();
      }
    })
  }
}
