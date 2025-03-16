import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../Services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  model:any ={};
  constructor( private router: Router,private accountService:AccountService){}
  onChange(input: any){
    console.log(input);
  }

  onSubmit(form: any){
    console.log(form);
  }
  Register(){
    console.log(this.model);
    this.accountService.Register(this.model).subscribe((response) => {
      console.log(response);
    this.router.navigate(['login']);
      alert('Register Successful');
    }, (error) => {
      console.error(error);
      alert('Register failed');
    });
  }

}
