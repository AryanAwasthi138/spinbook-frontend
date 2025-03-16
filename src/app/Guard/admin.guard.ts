import { CanActivate, CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class adminGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): boolean {
    if (this.authService.isLoggedIn() && localStorage.getItem('role')=='Admin') { 
      return true;
    } else {
      alert("Your are Unauthorised to access this page");
      return false;
    }
  }
}
