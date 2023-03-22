import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url,api,links } from 'Environment/environment';
@Injectable({
  providedIn: 'root'
})
export class CRUDserviceService {

  constructor(private http:HttpClient) { }

  GetData(){
    return this.http.get(`${api+links.Add.get}`)
  }
  PutData(TaskId:any,formData:any){
    console.log(TaskId)
    return this.http.put(`${api+links.Add.put}`, formData)
  }
  DeleteData(TaskId:any){
    console.log(TaskId)
    return this.http.delete(`${api+links.Add.delete}`+TaskId)
  }
  PostData(formData:any){
    return this.http.post(`${api+links.Add.post}`,formData)
  }
}
