import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { id } from 'src/app/utils/shared';
import { CRUDserviceService } from 'src/app/Services/crudservice.service';
@Component({
  selector: 'app-show-task-details',
  templateUrl: './show-task-details.component.html',
  styleUrls: ['./show-task-details.component.css']
})
export class ShowTaskDetailsComponent {
  taskData:any;
  constructor(private modal:NgbModal, private service:CRUDserviceService){
    this.service.GetData().subscribe((res:any)=>{
        res.filter((val:any)=>{
           if(val.id===id){
            this.taskData=val;
            
            console.log( this.taskData.id)
           }
        })
   
    })
  }
  OnClick(){
    this.modal.dismissAll();
  }
}
