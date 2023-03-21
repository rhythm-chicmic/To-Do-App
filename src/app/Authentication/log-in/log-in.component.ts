import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
constructor(private service :AuthserviceService){}
  LoginForm = new FormGroup({
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required])
  })


  OnSubmit(){
    console.log(this.LoginForm.value)
    this.service.PostLogin(this.LoginForm.value).subscribe((res)=>{
      console.log(res);
    });
  
  }
}
