import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn():boolean{
    return !!localStorage.getItem('token');
  }
  isUser():boolean{
    if(this.isLoggedIn()&&localStorage.getItem('role')=='User'){
      return true;
    }
    return false;
  }

  isAdmin():boolean{
    if(this.isLoggedIn()&&localStorage.getItem('role')=='Admin'){
      return true;
    }
    return false;
  }

  logout(){
    if(this.isLoggedIn()){
      alert("Logged Out");
    }
    localStorage.clear();
    this.isLoggedIn();
    

  }
}
