import { CanActivate, CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): boolean {
    if (this.authService.isLoggedIn()&&localStorage.getItem('role')=='User') { // Check if user is logged in
      return true;
    }
    else {
      alert("Your are Unauthorised to access this page");
// Redirect to login if not authenticated
      return false;
    }
  }


  // AdminPermission():boolean{
  //   if (this.authService.isLoggedIn()) {
  //     if(localStorage.getItem('role')=='Admin'){
  //       return true;
  //     } 
  //     else{
  //       this.router.navigateByUrl('viewtable');
  //       alert("Your are Unauthorised to access this page");
  //       return false;
  //     }
  //   } else {
  //     this.router.navigate(['/login']); // Redirect to login if not authenticated
  //     return false;
  //   }
  // }
}
