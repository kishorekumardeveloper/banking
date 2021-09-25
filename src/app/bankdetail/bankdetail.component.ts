import { Component, OnInit } from '@angular/core';
import {Validators,FormBuilder,FormGroup,FormControl}from '@angular/forms';
import {AuthService} from '../service/auth.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-bankdetail',
  templateUrl: './bankdetail.component.html',
  styleUrls: ['./bankdetail.component.css']
})
export class BankdetailComponent implements OnInit {
  signUpForm: FormGroup;
  submitted: boolean=false; 
  constructor(public auth:AuthService,private formBuilder: FormBuilder,public router: Router) { 
    this.signUpForm = this.formBuilder.group({
      company:[null, Validators.required],
      website:[null, Validators.required],
      location:[null, Validators.required],
      skills:[null, Validators.required],
      githubusername:[null, Validators.required]
  })
}
onSubmitClick(){

  this.submitted =true;
  let obj={
  
  
 
    company:this.signUpForm.value.company,
    website:this.signUpForm.value.website,
    location:this.signUpForm.value.location,
    skills:this.signUpForm.value.skills,
    githubUsername:this.signUpForm.value.githubusername
  
    
  }
  this.auth.BankData(obj).subscribe((response)=>{
    console.log("response",response)
     this.router.navigate([`CreatecomponetComponent`]);
},(error)=>{
   console.log("error",error);
})
   alert("register");
}
  ngOnInit(): void {
  }
  get f() { return this.signUpForm.controls; }
}
