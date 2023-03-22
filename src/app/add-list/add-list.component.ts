import { Component ,OnInit} from '@angular/core';
import { CRUDserviceService } from '../Services/crudservice.service';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { task_type, status } from '../utils/shared';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent {
  task_type:any= task_type
  submitted:boolean= false;
  status= status
  constructor(private service:CRUDserviceService){}
  AddTaskForm= new FormGroup({
    title:new FormControl('',[Validators.required,Validators.minLength(4),
    Validators.pattern('^[_A-z0-9]*((-|s)*[_A-z0-9])*$')]),
    category: new FormControl('', Validators.required),
    description: new FormControl('',[Validators.required, Validators.minLength(10),Validators.maxLength(70)]),
    image: new FormControl('', Validators.required),
    status: new FormControl('',Validators.required),
    startTime  :new FormControl('',Validators.required),
    endTime: new FormControl('',Validators.required) 
  })

OnSubmit(){
  console.log(this.AddTaskForm.value)
  if(this.AddTaskForm.valid){
    
  this.service.PostData(this.AddTaskForm.value).subscribe((res)=>{
    console.log(res)})

  this.clearForm();
}
else if(!this.AddTaskForm.valid) {
  this.submitted=true;
}
}


get controls() {
  return this.AddTaskForm.controls
}


  clearForm(){
    this.AddTaskForm.reset({
      'title':'',
      'category':'',
      'description':'',
      'image':'',
      'status':'',
      'startTime':'',
      'endTime':''
    })
  }


}
