import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './Authentication/sign-up/sign-up.component';
import { LogInComponent } from './Authentication/log-in/log-in.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './Navigatation/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AddListComponent } from './add-list/add-list.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShowTaskDetailsComponent } from './Modals/show-task-details/show-task-details.component';
import { HttpconfigInterceptor } from './Interceptor/httpconfig.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LogInComponent,
    NavbarComponent,
    HomeComponent,
    AddListComponent,
    PagenotfoundComponent,
    ShowTaskDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS ,useClass:HttpconfigInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
