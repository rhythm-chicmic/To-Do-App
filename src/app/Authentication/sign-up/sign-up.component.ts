import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthserviceService } from '../authservice.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  submitted:boolean =false;
  SignupForm = new FormGroup({
    name: new FormControl('', [Validators.required,Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')]),
    phoneNumber: new FormControl('', [Validators.required, Validators.maxLength(10),
    Validators.pattern('^[0-9]+$')]),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required)
  })
  constructor(private service: AuthserviceService) { }

  get controls(){
    return this.SignupForm.controls;
  }


  OnSubmit() {
    console.log(this.SignupForm.value)
    if(this.SignupForm.valid){
    
    this.service.PostSignUp(this.SignupForm.value).subscribe((res) => {
      console.log(res)
    });
  }
  else {
    this.submitted=true;
  }
  
}


}
