import { Component, OnInit } from '@angular/core';
import {GlobalProfileDetailsService} from "../global-profile-details.service";
import { Router } from "@angular/router";
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public headerName:string='Credit Card Details';
  public profileDetails:any[]=[];
  public profileDetails1:any[]=[];
  public profileDetails2:any[]=[];
  public country='#20';
  routeParmsSubscription: Subscription;
  constructor(public globalService:GlobalProfileDetailsService,public router: Router) {
    this.profileDetails=this.globalService.GlobalhomeDetailsService;
    this.profileDetails1=this.globalService.GlobalhomeDetailsService1;
    this.profileDetails2=this.globalService.GlobalhomeDetailsService2;
    }

  ngOnInit(): void {
       this.details();
       document.body.style.backgroundColor = 'white		';

  }
  details(){
    debugger;
    this.routeParmsSubscription= this.globalService.getProfileData().subscribe((response)=>{
      this.profileDetails=response.posts;
      },(error)=>{
        console.log(error);
      })
  }
  viewProfile(i){
    debugger;
    this.globalService.id=i;
    alert("hello")
    this.router.navigate([`/home/detail/:id ${i}`]);
    
  }
   ngOnDestroy()
    {
     alert("destroy");
     this.routeParmsSubscription.unsubscribe();
    }
}



