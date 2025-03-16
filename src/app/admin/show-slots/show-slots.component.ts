import { Component } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { Router } from '@angular/router';
import { AdminService } from '../../Services/admin.service';



@Component({
  selector: 'app-show-slots',
  templateUrl: './show-slots.component.html',
  styleUrl: './show-slots.component.css'
})
export class ShowSlotsComponent {
DeleteSlots() {
this.adminService.deleteslot(this.slotIdToDelete).subscribe(response=>{
  alert("Slot Deleted Successfully");
  window.location.reload();
},error=>{
  alert(error['error'].message);
})
}
slotIdToDelete : any;
slotDetails: any;
showPopup:boolean = false;
starttime: Date | null = null; // Initialize with null
endtime: Date | null = null;
addSlots() {
  const storedTableId = localStorage.getItem('tableId');
  console.log('Start Time:', this.starttime);
  console.log('End Time:', this.endtime);
  if (this.starttime && this.endtime) {
    const formattedStartTime = this.convertToDateTimeFormat(this.starttime);
    const formattedEndTime = this.convertToDateTimeFormat(this.endtime);
    
    console.log('Formatted Start Time:', formattedStartTime);
    console.log('Formatted End Time:', formattedEndTime);
    
    const slotdet = {
      tableId: storedTableId,
      startTime:formattedStartTime,
      endTime:formattedEndTime
    }
    this.adminService.addslot(slotdet).subscribe(response=>{
      console.log(response);
      alert("Slot Added Successfully");
      window.location.reload();
    },error=>{
      alert("Something Went Wrong");
    })
   
  } else {
    alert('Please select both start and end times.');
  }
}
convertToDateTimeFormat(time: Date): string {
  // Assuming you want to keep today's date and only change the time
  const today = new Date();
  const utcDateTime = new Date(Date.UTC(today.getFullYear(), today.getMonth(), today.getDate(), time.getHours(), time.getMinutes()));

  // Format the dateTime as per your API requirements, e.g., ISO format
  return utcDateTime.toISOString();
}

showDialog() {
  this.showPopup = true;
}
openDeleteSlotModal(slotId: string) {
  this.slotIdToDelete = slotId;
}

onRowEditCancel(_t14: any,_t16: any) {
throw new Error('Method not implemented.');
}
onRowEditSave(_t14: any) {
throw new Error('Method not implemented.');
}
onRowEditInit(_t14: any) {
throw new Error('Method not implemented.');
}
  slots:any =[];
  tableName:any = localStorage.getItem('tableName')
  
  constructor(private userService:UserService,private adminService:AdminService,private router: Router){
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
  

  ResetSlots() {
    const storedTableId = localStorage.getItem('tableId');
    if(storedTableId!=null){
      const tableId = parseInt(storedTableId, 10); 
      this.adminService.resetTableSlots(tableId).subscribe(response=>{
        alert("Slots Reset Successfully");
        window.location.reload();
      },error=>{
        alert("Something Went Wrong");
      })
      
    }

    }
}
