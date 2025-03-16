import { Component } from '@angular/core';
import { UserService } from '../Services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-table',
  templateUrl: './view-table.component.html',
  styleUrl: './view-table.component.css'
})
export class ViewTableComponent {
tables:any=[];

constructor(private userService:UserService,private router:Router){
  this.getAllTable();
}

getAllTable(){

  this.userService.getAllTable().subscribe(response=>{
    console.log(response);
    this.tables = response;
  })
}

booknow(tableId:number,tableName:any){
  localStorage.setItem('tableId', tableId.toString());
  localStorage.setItem('tableName',tableName);
  this.router.navigateByUrl('viewslots');
}
}
