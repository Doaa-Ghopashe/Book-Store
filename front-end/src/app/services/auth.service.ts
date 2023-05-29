import { Injectable } from '@angular/core';
import { HttpClient}   from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  getAuthor() {
    throw new Error('Method not implemented.');
  }

  constructor(private _http : HttpClient) { 
   }

  signUp(signData:any):Observable<any>
  {
     return this._http.post('',signData);
  }

  login(loginData:any):Observable<any>
  {
    return this._http.post('',loginData);
  }
}
