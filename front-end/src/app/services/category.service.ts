import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
allCategories:any[]=[];
  constructor(private _httpClinent:HttpClient) {}

  getCategory():Observable <any>{

   return this._httpClinent.get('http://localhost:5000/category')

  }

}
