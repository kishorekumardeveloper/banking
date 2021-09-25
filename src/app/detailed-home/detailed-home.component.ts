import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from "@angular/router";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detailed-home',
  templateUrl: './detailed-home.component.html',
  styleUrls: ['./detailed-home.component.css']
})
export class DetailedHomeComponent implements OnInit {
  routeParmsSubscription: Subscription;
  constructor(public router: Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    debugger;
    this.routeParmsSubscription=this.activatedRoute.params.subscribe((response)=>{
      this.getProfile(response.id);
    })
  }
  getProfile(id){
    alert("call the api");
  }
  viewProfile(){
   
  
    this.router.navigate([`/Home`]);
    
  }
}
