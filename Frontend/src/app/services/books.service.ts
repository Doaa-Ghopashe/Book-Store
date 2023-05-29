import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../interfaces/book';
@Injectable({
  providedIn: 'root'
})
export class BooksService {
  allBooks!:Book[];
  constructor(private _httpClinet:HttpClient) { }
  // getBooks():Observable<any>{
    //  this._httpClinet.get('http://localhost:5000/book').subscribe((res:any)=>{
    //   // console.log(res);
    //   this.allBooks=res
    //   return res
    //  });
    getBooks():Observable<any>{
   return  this._httpClinet.get('http://localhost:5000/book')
  }

}