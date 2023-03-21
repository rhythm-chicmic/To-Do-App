import { Injectable } from '@angular/core';
import { api,links } from 'Environment/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private http:HttpClient) { }

  PostSignUp(data:any){
    console.log(`${api+links.auth.signup}`)
    return this.http.post(`${api+links.auth.signup}`,data)
  }
  PostLogin(data:any){
    return this.http.post(`${api+links.auth.login}`,data)
  }
}
