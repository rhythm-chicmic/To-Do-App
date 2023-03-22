import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from './Authentication/authservice.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private authservice:AuthserviceService){}
  
  ngOnInit() {
  
  }
  title = 'To-Do';
}
