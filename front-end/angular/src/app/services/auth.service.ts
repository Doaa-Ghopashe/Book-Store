import { Injectable } from '@angular/core';
import { HttpClient}   from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http : HttpClient) { 
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
