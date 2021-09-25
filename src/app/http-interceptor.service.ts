import { Injectable } from '@angular/core';
import{HttpInterceptor,HttpRequest,HttpHandler} from "@angular/common/http";
import {AuthService} from '../app/service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor{

  constructor(public auth:AuthService){

  }
  intercept(request:HttpRequest<any>,next:HttpHandler)
  {
    debugger;
    if(this.auth.token='register'){
      this.auth.token="%%";
      request = request.clone({setHeaders:{"token":sessionStorage.getItem('token')}});
    }

    return next.handle(request);
  
}


}