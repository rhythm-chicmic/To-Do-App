import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddListComponent } from './add-list/add-list.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SignUpComponent } from './Authentication/sign-up/sign-up.component';
import { LogInComponent } from './Authentication/log-in/log-in.component';

const routes: Routes = [
  {path:'', redirectTo:"home",pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'add-list',component:AddListComponent},
  {path:'signup',component:SignUpComponent},
  {path:'login',component:LogInComponent},
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
