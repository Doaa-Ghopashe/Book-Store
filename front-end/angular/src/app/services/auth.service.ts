import { Injectable } from '@angular/core';
import { HttpClient}   from '@angular/common/http';
import { Observable } from 'rxjs';
import {Router } from '@angular/router';




@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogin:any;
  constructor(private _http : HttpClient, private _router : Router) {
   }


  logged()
  {
      let token = localStorage.getItem("token");
      if(token)
      {
        this.isLogin = true;
      }
      else
      {
        this.isLogin = false;
      }
  }

  canActivate():boolean | Observable<boolean>
   {
     let token  = localStorage.getItem("token");
     if(token)
     {
        return true;
     }
     this._router.navigateByUrl("/user/login")
         return false;
   }

  signUp(signData:any):Observable<any>
  {
     return this._http.post('https://route-ecommerce.onrender.com/api/v1/auth/signup',signData);
  }

  login(loginData:any):Observable<any>
  {
    return this._http.post('https://route-ecommerce.onrender.com/api/v1/auth/signin',loginData);
  }
}
