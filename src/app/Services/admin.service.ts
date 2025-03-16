import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {


  constructor(private http:HttpClient) { }
savechanges(tableData:any):Observable<any>{
  return this.http.put(`https://localhost:8000/api/Admin/UpdateTable`,tableData);
}

addtable(tableData:any):Observable<any>{
  return this.http.post(`https://localhost:8000/api/Admin/AddTable`,tableData);
}

deletetable(tableId:number):Observable<any>{
  return this.http.delete(`https://localhost:8000/api/Admin/RemoveTable/${tableId}`);
}

resetTableSlots(tableId:number):Observable<any>{
  return this.http.put(`https://localhost:8000/api/Admin/ResetTableSlots`,tableId);
}

addslot(slotDetails:any):Observable<any>{
  return this.http.post('https://localhost:8000/api/Admin/AddSlot',slotDetails);
}
deleteslot(slotId:any):Observable<any>{
  return this.http.delete(`https://localhost:8000/api/Admin/RemoveSlot/${slotId}`)
}
}
