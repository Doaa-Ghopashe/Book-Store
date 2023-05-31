import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.scss']
})
export class CategoryDetailsComponent {
  constructor(private _route: ActivatedRoute, private _BookService: BooksService) { 

    let id:number =  _route.snapshot.params["id"];
    this.getBooksRelatedToCategory();
  }

  getBooksRelatedToCategory()
  {
    this._BookService.getBooks().subscribe((res)=>
    {
      console.log(res.data)
    })
  }
  
}
