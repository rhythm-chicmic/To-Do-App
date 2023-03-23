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
  image:any;
  submitted:boolean= false;
  status= status
  constructor(private service:CRUDserviceService){}
  AddTaskForm= new FormGroup({
    title:new FormControl('',[Validators.required,Validators.minLength(4),
    Validators.pattern('^[_A-z0-9]*((-|s)*[_A-z0-9])*$')]),
    category: new FormControl('', Validators.required),
    description: new FormControl('',[Validators.required, Validators.minLength(10),Validators.maxLength(70)]),
    image: new FormControl(''),
    status: new FormControl('',Validators.required),
    startTime  :new FormControl('',Validators.required),
    endTime: new FormControl('',Validators.required) 
  })

OnSubmit(){
  const data = new FormData();
  if(this.image!==undefined){
  data.append('image',this.image);

  }
  data.append('title',this.AddTaskForm?.value?.title || '' )
  data.append('category',this.AddTaskForm?.value?.category || '' )
  data.append('description',this.AddTaskForm?.value?.description || '' )
  data.append('status',this.AddTaskForm?.value?.status || '' )
  data.append('startTime',this.AddTaskForm?.value?.startTime || '' )
  data.append('endTime',this.AddTaskForm?.value?.endTime || '' )

  if(this.AddTaskForm.valid){
  

    console.log(data);  
  this.service.PostData(data).subscribe((res)=>{
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
  readImage(fileEvent:any){
    console.log(fileEvent)
    this.image = fileEvent.srcElement.files[0];
    console.log(this.image);
  }


}
