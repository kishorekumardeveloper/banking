import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from "@angular/common/http";
import { HttpClientModule,HTTP_INTERCEPTORS} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DetailedHomeComponent } from './detailed-home/detailed-home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreatecomponetComponent } from './createcomponet/createcomponet.component';
import { BankdetailComponent } from './bankdetail/bankdetail.component'
import { FormsModule }   from '@angular/forms';
import { AlertDirective } from './alert.directive';
import { RepeaterDirective } from './repeater.directive';
import {HttpInterceptorService} from './http-interceptor.service';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    DetailedHomeComponent,
    CreatecomponetComponent,
    BankdetailComponent,
    AlertDirective,
    RepeaterDirective,
    FilterPipe,
 
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule

  ],

providers: [{provide:HTTP_INTERCEPTORS,useClass:HttpInterceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
