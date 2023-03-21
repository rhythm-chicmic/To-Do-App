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
  status= status
  constructor(private service:CRUDserviceService){}
  AddTaskForm= new FormGroup({
    item:new FormControl('',Validators.required),
    type: new FormControl('', Validators.required),
    description: new FormControl('',Validators.required),
    image: new FormControl('', Validators.required),
    status: new FormControl('',Validators.required) 
  })
OnSubmit(){
  console.log(this.AddTaskForm)
  this.service.PostData(this.AddTaskForm.value).subscribe((res)=>{
    console.log(res)
  }
  )
  this.clearForm();

}
  clearForm(){
    this.AddTaskForm.reset({
      'item':'',
      'type':'',
      'description':'',
      'image':'',
      'status':''
    })
  }


}
