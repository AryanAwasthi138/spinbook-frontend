import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  login(model: any): Observable<any>{
    return this.http.post(`https://localhost:8000/api/Account/login`, model)
  }
  Register(model: any): Observable<any>{
    return this.http.post(`https://localhost:8000/api/Account/register`, model) 
}
}