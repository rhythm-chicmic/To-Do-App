import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthserviceService } from 'src/app/Authentication/authservice.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
 
  constructor(private route:Router,private authservice:AuthserviceService) {}
    OnClick(navigation:string){
    this.route.navigate([navigation])
  }

  OnLogout(){
    localStorage.clear();
  }
  LogOut(){

    if(localStorage.getItem('token')!==null){
      return 'block'
    }
    else{
      return 'none';
    }
  }

 
}
