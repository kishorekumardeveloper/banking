import { Injectable } from '@angular/core';
import { Router, CanActivate} from '@angular/router';
import {GlobalProfileDetailsService} from './global-profile-details.service';
@Injectable({
  providedIn: 'root'
})
export class CanActiveService implements CanActivate {
  constructor(public router:Router,public GlobalProfileDetailsService:GlobalProfileDetailsService) { }
  canActivate() : boolean
  {
    return false;  
  
  }
}