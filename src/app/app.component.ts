import { Component } from '@angular/core';
import { AuthService } from './Services/auth.service';
import { Router } from '@angular/router';
import { ToasterPosition } from 'ng-angular-popup';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TT_Exp';
  ToasterPosition = ToasterPosition
  
  constructor(private authService : AuthService,private router : Router){}

  logout(){
    this.authService.logout();
    this.router.navigateByUrl("home");
    
  }
  isUser():boolean{
    return this.authService.isUser();
  }
  isAdmin():boolean{
    return this.authService.isAdmin();
  }
}
