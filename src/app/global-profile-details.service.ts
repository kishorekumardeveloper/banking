import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GlobalProfileDetailsService {
  
  public GlobalhomeDetailsService:any[]=[];
  public GlobalhomeDetailsService1:any[]=[];
  public GlobalhomeDetailsService2:any[]=[];
  public id:any;
  public login:boolean=true;
  constructor(private http:HttpClient) {
    this.GlobalhomeDetailsService=[
      {
        
          name:"HDFC Diners ClubMiles Card",
          imgUrl:"../../assets/images/hdfc_bank_diners_clubmiles_credit_card.png",
          occupation:"Lounge Access",
          location:"This credit card comes with an annual fee of Rs.1,000 and an interest rate of 3.49%",
          skills:["Welcome Gift","Balance Transfer","Travel Benefits"]
        }
      ]
       //* this.GlobalhomeDetailsService1=[
      //  {
       //   imgUrl:"../../assets/images/axis_bank_neo_credit_card.png",
       //   name:"Axis Bank Neo Credit Card",
       //   occupation:"Shopping and Movies",
        //  location:"the annual fee charged is Rs.250.",
        //  skills:["Welcome Gift","Balance Transfer","Travel Benefits"]
       // },
       // ]
       // this.GlobalhomeDetailsService2=[
       // {
         // imgUrl:"../../assets/images/indian oil.jpg",
         // name:"IndianOil Citi Platinum Card",
         // occupation:"Shopping and Movies ",
        //  location:"the annual fee charged is Rs.250.",
        //  skills:["Welcome Gift","Balance Transfer","Travel Benefits"]
      //  }
    //  ]
    }
    getProfileData(){
      return this.http.get<{posts:any[]}>('http://localhost:3000/api/ProfileDetails');
     }
  }

  

