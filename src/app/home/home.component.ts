import { Component,OnInit } from '@angular/core';
import { CRUDserviceService } from '../Services/crudservice.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {  task_type,status, set_id , delete_options,id } from '../utils/shared';
import { FormGroup,FormBuilder } from '@angular/forms';
import { ShowTaskDetailsComponent } from '../Modals/show-task-details/show-task-details.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  status=status
  task_type= task_type
  userList:any=[]
  Options = delete_options
  AddTaskForm!: FormGroup;
  TaskId:any;
  constructor(private service:CRUDserviceService ,private modalservice:NgbModal,private fb:FormBuilder){
      this.service.GetData().subscribe((res)=>{
        this.userList=res;
      })
   
}
ngOnInit() {
  this.AddTaskForm = this.fb.group({
   item: [''],
   type: [''],
   description: [''],
   image: [''],
   status:['']
  });
}
  openModal(targetModal:any, target:any) {
    this.TaskId=target.id;
    this.modalservice.open(targetModal, {
     centered: true,
     backdrop: 'static'
    });
   
    this.AddTaskForm.patchValue({
     item: target.item,
     type: target.type,
     description: target.description,
     image: target.image,
     status: target.status
    });
   
 }
 OnSubmit(){
  this.modalservice.dismissAll();
   const EditData =this.AddTaskForm.getRawValue();
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
  this.TaskId = target.id
  this.modalservice.open(targetModal, {
    centered: true,
    backdrop: 'static',
   });
 }
 ViewTaskDetails(target:any){
  set_id(target.id);
  this.modalservice.open(ShowTaskDetailsComponent, {
    centered: true,
    backdrop: 'static',
    size:'sm'
   },);
 }
}

