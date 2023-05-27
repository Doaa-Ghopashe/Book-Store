import { Component } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
@Component({
  selector: 'app-catrgories',
  templateUrl: './catrgories.component.html',
  styleUrls: ['./catrgories.component.scss']
})
export class CatrgoriesComponent {
  allCategories!:any[];
constructor(private _category:CategoryService){
  _category.getCategory().subscribe((res)=>{
    this.allCategories=res.data.categories
    console.log( this.allCategories);
    
  })
}
}
