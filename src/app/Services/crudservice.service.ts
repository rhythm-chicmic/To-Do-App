import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from 'Environment/environment';
@Injectable({
  providedIn: 'root'
})
export class CRUDserviceService {

  constructor(private http:HttpClient) { }

  GetData(){
    return this.http.get(url+'Tasks')
  }
  PostData(formData:any){
    return this.http.post(url+'Tasks',formData)
  }
  PutData(TaskId:any,formData:any){
    return this.http.put(url+'Tasks/'+TaskId, formData)
  }
  DeleteData(TaskId:any){
    console.log(TaskId)
    return this.http.delete(`${url}Tasks/`+TaskId)
  }
}
