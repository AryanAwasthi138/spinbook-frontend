import { Component } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-bookslot',
  templateUrl: './bookslot.component.html',
  styleUrl: './bookslot.component.css'
})
export class BookslotComponent {
constructor(private userService:UserService){
  this.getbookingDetails();
}
info : any = {};
userName :any = localStorage.getItem('userName');
getbookingDetails(){
this.userService.viewBooking(this.userName).subscribe(response=>{
  console.log(response);
  this.info=response;
})
}
}
