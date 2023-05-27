import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Author } from '../interfaces/author';
@Injectable({
  providedIn: 'root'
})
export class AuthorService {
allAuthors!:Author[];
  constructor(private _httpClinet:HttpClient) { }
  getAuthor(): Observable <any>{
  return  this._httpClinet.get('http://localhost:5000/authors')
  }
}
