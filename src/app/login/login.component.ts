import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';
import {CanComponentDeactivate} from '../deactive.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,CanComponentDeactivate {
  public flag:boolean=false;
  public canLeave:boolean=false;
  public errorData:string="invalid email";
  public emailTwoWay:string="salman";

  constructor(public router:Router) { 

}

  ngOnInit(): void {
    /*background: linear-gradient(to right, #eb93c9, #1565c0);*/
    document.body.style.background ='linear-gradient(to right, #eb93c9, #1565c0)';

  }
  onSubmit(form: NgForm){
    if (form.invalid) {
      this.flag=true;
      alert("error");
      return;
    }
    this.flag=false;
  }
  }


