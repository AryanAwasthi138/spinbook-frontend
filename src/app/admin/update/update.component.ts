import { Component } from '@angular/core';
import { AdminService } from '../../Services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {
tableId : number = this.gettableId(); 
  tableData:any ={tableId : this.tableId }

  constructor(private adminService:AdminService, private router:Router){}
  gettableId(){
    const storedTableId = localStorage.getItem('tableId');
  if(storedTableId!=null){
  const tableId = parseInt(storedTableId, 10); 
  return tableId;
  }
  return 0;
}
savechanges(tableData:any){
  this.adminService.savechanges(tableData).subscribe((response)=>{
    console.log(response);
    alert("Table updated Successfully");
    this.router.navigateByUrl('admin');
  },(error)=>{
    console.log(error);
    alert("There's something went wrong.")
  })
}
cancel(){
  this.router.navigateByUrl('admin');
}

}
