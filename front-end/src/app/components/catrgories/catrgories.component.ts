import { Component } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-catrgories',
  templateUrl: './catrgories.component.html',
  styleUrls: ['./catrgories.component.scss']
})
export class CatrgoriesComponent {
  allCategories!:any[];
constructor(private _category:CategoryService,private _router:Router){
  _category.getCategory().subscribe((res)=>{
    this.allCategories=res.data.categories
    // console.log( this.allCategories);
    
  })
}
   items = this.allCategories

currentPage = 1; 
   itemsPerPage = 6;
   getDetails(categoryId:any){
  //  console.log(categoryId);
   this._router.navigateByUrl(`/category-details/${categoryId}`)
   }
}

