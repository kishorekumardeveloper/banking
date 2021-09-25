import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-createcomponet',
  templateUrl: './createcomponet.component.html',
  styleUrls: ['./createcomponet.component.css']
})
export class CreatecomponetComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  createProfile(){
    alert('d');
    this.router.navigate(['/BankdetailComponent'])    
  }
}
