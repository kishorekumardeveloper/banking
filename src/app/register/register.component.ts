import { Component, OnInit } from '@angular/core';
import {Validators,FormBuilder,FormGroup,FormControl}from '@angular/forms';
import {AuthService} from '../service/auth.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  signUpForm: FormGroup;
  submitted: boolean=false;  
  constructor(private formBuilder: FormBuilder,public auth:AuthService,public router: Router
    ) {
      this.signUpForm = this.formBuilder.group({
        firstName:  [null, Validators.required],
        email:['', [Validators.required,Validators.minLength(3)]],
        password:[null, Validators.required],
        password2:[null, Validators.required]
      })
   
  }
   onSubmitClick(){
    this.auth.token='register';
    this.submitted =true;
    let obj={
      firstName:this.signUpForm.value.firstName,
      email:this.signUpForm.value.email,
      password:this.signUpForm.value.password
    }
    this.auth.postData(obj).subscribe((response)=>{
      console.log("response",response)
      this.auth.token=response.token;
      localStorage.setItem('token',this.auth.token);
      sessionStorage.setItem('token',this.auth.token);


 },(error)=>{
     console.log("error",error);
 })
   
   /** this.signUpForm.setValue({
      firstName: "Mr"+this.signUpForm.value.firstName,
      email: "smith@gmail.com",
      password:"Welcome@1234",
      password2:"Welcome@1234"
    });
    console.log(this.signUpForm.value);
    this.signUpForm.patchValue({
      firstName: "Mr"+this.signUpForm.value.firstName,
      email: "smith@gmail.com",
      password:"Welcome@1234",
    });
    console.log(this.signUpForm.value);
    this.signUpForm.reset({
      firstName:"salman"
    });**/
  }

  ngOnInit(): void {
    document.body.style.backgroundColor = 'gainsboro	';

  }
  get f() { return this.signUpForm.controls; }
}
