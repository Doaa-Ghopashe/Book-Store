import { Component } from '@angular/core';
import { Book } from 'src/app/interfaces/book';
import { BooksService } from 'src/app/services/books.service';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent {
  allBooks:any[]=[];
prex='../../../../../back-end/assets/';
  constructor(private _booksService:BooksService){
    _booksService.getBooks().subscribe((res)=>{
      this.allBooks=res.data.book
      console.log(this.allBooks);

    })
   //console.log(this.allBooks);
   
}
ngOnInit() {
  // console.log(data);

}
}
