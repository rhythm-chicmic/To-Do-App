import { Component,OnInit } from '@angular/core';
import { CRUDserviceService } from '../Services/crudservice.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {  task_type,status, set_id , delete_options,id } from '../utils/shared';
import { FormGroup,FormBuilder } from '@angular/forms';
import { ShowTaskDetailsComponent } from '../Modals/show-task-details/show-task-details.component';
import { image_url } from 'Environment/environment';
import { AuthserviceService } from '../Authentication/authservice.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  image_url = image_url
  status=status
  task_type= task_type
  userList:any=[]
  Options = delete_options
  AddTaskForm!: FormGroup;
  TaskId:any;
  constructor(private service:CRUDserviceService,private modalservice:NgbModal,private fb:FormBuilder){
   
   
}
ngOnInit() {

  setTimeout(() => {
    this.service.GetData().subscribe((res)=>{
      console.log(res)
      this.userList=res;
     
    })
  }, 700);


  this.AddTaskForm = this.fb.group({
   title: [''],
   category: [''],
   description: [''],
   image: [''],
   status:[''],
   startTime:[''],
   endTime:['']
  });
}

  openModal(targetModal:any, target:any) {
    this.TaskId=target._id;
    this.modalservice.open(targetModal, {
     centered: true,
     backdrop: 'static'
    });
   
    this.AddTaskForm.patchValue({
     title: target.title,
     category: target.category,
     description: target.description,
     image: target.image,
     status: target.status,
     endTime:target.endTime,
     startTime: target.startTime
    });
   
 }
 OnSubmit(){
  this.modalservice.dismissAll();
   const EditData =this.AddTaskForm.getRawValue();
   EditData['postId']=this.TaskId
   console.log(EditData)
  this.service.PutData(this.TaskId,EditData).subscribe((res)=>{
    console.log(res)
  })
  this.service.GetData().subscribe((res)=>{
    this.userList=res;
  })
 }
 OnClick(option:any){
    if(option==='Yes'){
     this.service.DeleteData(this.TaskId).subscribe();
     this.service.GetData().subscribe((res)=>this.userList=res)
     this.modalservice.dismissAll();

    }
    else {
      this.modalservice.dismissAll();
    }
 }
 deleteModal(targetModal:any,target:any){
  this.TaskId = target._id
  this.modalservice.open(targetModal, {
    centered: true,
    backdrop: 'static',
   });
 }
 ViewTaskDetails(target:any){
  console.log(target._id)
  set_id(target._id);
  this.modalservice.open(ShowTaskDetailsComponent, {
    centered: true,
    backdrop: 'static',
    size:'sm'
   },);
 }
}

