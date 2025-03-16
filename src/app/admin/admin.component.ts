import { Component } from '@angular/core';
import { UserService } from '../Services/user.service';
import { Router } from '@angular/router';
import { AdminService } from '../Services/admin.service';
import { ToastrService } from 'ngx-toastr';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  tables: any = [];
tableData: any ={};
deltableid: number = 0;

  constructor(private userService: UserService, private router: Router, private adminService: AdminService, private toast: NgToastService) {
    this.getAllTable();
  }

  Success(){
  }
  
  getAllTable() {
    this.userService.getAllTable().subscribe(response => {
      console.log(response);
      this.tables = response;
    })
  }
  
  deletetabledata(tableId: any){
    this.deltableid = tableId
  }

  modelclose(): void{
    let element: HTMLElement = document.getElementById('closeModalButton') as HTMLElement; //JavaScript
      element.click();
  }
  
  deletetable(){
    this.adminService.deletetable(this.deltableid).subscribe(response =>{ 
      this.modelclose();
      this.toast.success('Table Deleted Successfully', "Success", 5000);
      alert("Table Deleted Successfully");
      window.location.reload();                                                                    
    
    },
  error =>{
    console.log(error)
  })
  }

  viewSlots(tableId: number) {
    localStorage.setItem('tableId', tableId.toString());
    this.router.navigateByUrl('viewslots-admin');
  }
  UpdateEntries(tableId: any) {
    localStorage.setItem('tableId', tableId.toString());
    this.router.navigateByUrl('update');
  }
  onAddTable(form: any) {
    if (form.valid) {
      
      // Add logic here to send tableData to your backend API
      this.addtable(this.tableData);
    }

  }
  addtable(tableData: any) {
    this.adminService.addtable(tableData).subscribe((response) => {
      this.modelclose()  
      console.log(response); 
      alert("Table added Successfully");
      window.location.reload();
    }, (error) => {
      console.log(error);
      alert("There's something went wrong.")
    })

    
  
  }
}
