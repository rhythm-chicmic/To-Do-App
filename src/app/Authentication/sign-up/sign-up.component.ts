import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthserviceService } from '../authservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  SignupForm:FormGroup;
  constructor(private service: AuthserviceService,private FormBuilder :FormBuilder, private route:Router) { 
    this.SignupForm = FormBuilder.group({
      name: new FormControl('', [Validators.required,Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')]),
    phoneNumber: new FormControl('', [Validators.required, Validators.maxLength(10),
    Validators.pattern('^[0-9]+$')]),
    password: new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(50),Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{8,})$')]),
    confirmPassword: new FormControl('', [Validators.required])
    },
    {
      validators: this.MustMatch('password','confirmPassword')
    }
    )
  }

  submitted:boolean =false;
  MustMatch(controlName:string, matchingControlName:string){
    return (formGroup:FormGroup)=>{
      const control = formGroup.controls[controlName];
      const matchcontrol = formGroup.controls[matchingControlName];
      if(matchcontrol.errors && !matchcontrol.errors?.['MustMatch']){
      return
    }
    if(control.value != matchcontrol.value){
      matchcontrol.setErrors({MustMatch:true});
    }
    else{
      matchcontrol.setErrors(null);
    }

  }


  }
  get controls(){
    return this.SignupForm.controls;
  }
  OnClick(location:string){
    this.route.navigate([location]);
  }

  OnSubmit() {
    console.log(this.SignupForm.value)
    if(this.SignupForm.valid){
    
    this.service.PostSignUp(this.SignupForm.value).subscribe();
    this.route.navigate(['/home']);
  }
  else {
    this.submitted=true;
  }
  
}


}
