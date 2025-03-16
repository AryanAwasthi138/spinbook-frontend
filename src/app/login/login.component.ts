import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../Services/account.service';
import { AuthService } from '../Services/auth.service';
import {jwtDecode} from '../../../node_modules/jwt-decode';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  model: any = {}

  constructor( private router: Router,private accountService:AccountService,private authService:AuthService){
    this.authService.logout();
  }
  onChange(input: any){
    console.log(input);
  }

  onSubmit(form: any){
    console.log(form);
  }
  
  // login(){}
  login(){
    this.accountService.login(this.model).subscribe((response) => {
      console.log(response);
      this.authService.isLoggedIn();
      localStorage.setItem('userName',this.model.userName)
      localStorage.setItem('token', response.jwt);
      const decodedToken: any = jwtDecode(response.jwt);
      const role=decodedToken['role'];
      localStorage.setItem('role',role)
      if (role == 'Admin') {
        this.router.navigate(['admin']);
      }
      if(role=='User') {
        this.router.navigate(['viewtable']);
      }
  
      alert('Login Successful');
    }, (error) => {
      console.error(error);
      alert('Login failed');
    });
  }
}
