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
  image = `http://localhost:5000`;

  constructor(private _booksService:BooksService){
    _booksService.getBooks().subscribe((res)=>{
      this.allBooks=res.data.book
        // this.img=this.allBooks.photo.slice(5);

      // console.log(this.allBooks);
  })}
  //  items = this.allBooks 
   currentPage = 1; 
   itemsPerPage = 6;
 
ngOnInit() {
  
}
}