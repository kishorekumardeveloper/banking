import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public token:any;
  constructor(private http: HttpClient) {

   }
   postData(data){
    return this.http.post<{token:any}>('http://localhost:3000/api/posts',data);   

   }
   BankData(data){
    return this.http.post('http://localhost:3000/api/bankposts',data);
   

   }
}
