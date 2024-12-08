import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { UsersService } from '../../services/users.service';
import { ToastrService } from 'ngx-toastr';
import { DeleteComponent } from 'src/app/shared/delete/delete.component';
import { MatDialog } from '@angular/material/dialog';
import { UserDetailsComponent } from './user-details/user-details.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  length = 50;
  pageSize = 5;
  pageIndex = 0;
  tableResponse: any;
  tableData: any[] = [];
  pageSizeOptions = [5, 10, 25];
  pageEvent?: PageEvent;
  imagePath : string = 'https://upskilling-egypt.com:3006/';
  searchKey:number=0;
  userName:string='';
  
  constructor(private dialog:MatDialog,private _UsersService: UsersService, private _ToastrService: ToastrService) { }


  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {

    let paramsApi = {
      userName : this.userName,
      pageSize : this.pageSize,
      pageNumber:this.pageIndex
    }

    this._UsersService.getAllUsers(paramsApi).subscribe({
      next: (res) => {
        console.log(res);
        this.tableResponse = res;
        this.tableData = res.data;
      }
    })
  }

  getUser(){
    this._UsersService.getUserById(this.searchKey).subscribe({
      next:(res)=>{
        console.log(res);
      }
    })
  }


  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.getUsers();
  }
  
  openDeleteUserDialog(userData:any){
    console.log(userData)
    const dialogRef = this.dialog.open(DeleteComponent, {
      data:userData
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result)
      if(result){
        this.deleteUser(result);
        
      }
    });
  }
  
  openUserDetailes(item:any){
    const dialogRef = this.dialog.open(UserDetailsComponent, {
      data:item
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result)
      if(result){
        
        
      }
    });

  }


  deleteUser(userId:any){
    this._UsersService.onDeleteUser(userId).subscribe({
      next:(res) => {
        console.log(res);
      },error:()=>{

      },complete:()=> {
          this.getUsers();
          this._ToastrService.info('Deleted Successfuly')
      },
    })
  }

}
