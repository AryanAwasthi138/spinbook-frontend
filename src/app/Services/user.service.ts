import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAllTable():Observable<any>{
    return this.http.get("https://localhost:8000/api/Admin/GetAllTable")
  }

  getSlots(tableId:number):Observable<any>{
    return this.http.get(`https://localhost:8000/api/Admin/GetAllSlots?TableId=${tableId}`)
  }
  bookSlot(slotdetails:any):Observable<any>{
    return this.http.put(`https://localhost:8000/api/Booking/BookSlot`,slotdetails);

  }
  viewBooking(userName:any):Observable<any>{
    return this.http.get(`https://localhost:8000/api/Booking/ViewMyBooking?UserName=${encodeURIComponent(userName)}`)
  }
}
