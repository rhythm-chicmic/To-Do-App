import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthserviceService } from '../authservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  submitted:boolean =false;
constructor(private service :AuthserviceService, private route:Router){}
  LoginForm = new FormGroup({
      email: new FormControl('',[Validators.required,Validators.email,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')]),
      password: new FormControl('',[Validators.required,Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{8,})$')])
  })
  get controls(){
    return this.LoginForm.controls;
  }
  OnClick(location:string){
    this.route.navigate([location]);
  }
  OnSubmit(){
    console.log(this.LoginForm.value)
    if(this.LoginForm.valid){
    this.service.PostLogin(this.LoginForm.value).subscribe((res:any)=>{
      console.log(res);
      localStorage.setItem('token',res.token)
    });
    this.clearForm();

    this.route.navigate(['/home']);


  }
    else {
  this.submitted =true;

    }
  
  }
  clearForm(){
    this.LoginForm.reset({
      'email':'',
      'password':''
    })
  }
}
