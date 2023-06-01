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

  deleteCategory(id:any):Observable<any>{
    return this._httpClinent.delete(`http://localhost:5000/category/${id}`)
   }

   addCategry(categoryData:any):Observable<any>{
    return this._httpClinent.post(`http://localhost:5000/category`,categoryData)
   }

   updateCategory(id:any,newData:any):Observable<any>{
    return this._httpClinent.put(`http://localhost:5000/category/${id}`,newData)
   }

}