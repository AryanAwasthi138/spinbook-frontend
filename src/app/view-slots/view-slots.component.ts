import { Component } from '@angular/core';
import { UserService } from '../Services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-slots',
  templateUrl: './view-slots.component.html',
  styleUrl: './view-slots.component.css'
})
export class ViewSlotsComponent {
slots:any =[];
slotdetails: any = {}
tableName:any = localStorage.getItem('tableName')

constructor(private userService:UserService,private router: Router){
  this.getslots();
  console.log(this.tableName);
}

getslots(){
  const storedTableId = localStorage.getItem('tableId');
  if(storedTableId!=null){
  const tableId = parseInt(storedTableId, 10); 
  this.userService.getSlots(tableId).subscribe(response=>{
    console.log(response);
    this.slots = response;
  })
}
}
bookslot(tableId:number,slotId:number){
  this.slotdetails.tableId = tableId;
  this.slotdetails.slotId = slotId;
  this.slotdetails.userName = localStorage.getItem('userName');
this.userService.bookSlot(this.slotdetails).subscribe(response=>{
  console.log(response);
  window.location.reload();
  alert('Slot booked successfully');
},(error)=>{
  console.log(error);
  alert("There's some error while booking Slot, Please Try Again");
});

}

}
