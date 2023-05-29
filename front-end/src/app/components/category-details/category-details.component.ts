import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/interfaces/book';
import { BooksService } from 'src/app/services/books.service';
@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.scss']
})
export class CategoryDetailsComponent {
  AllBooks!:any[];
  categoryId!:number;
  currentBooks:any[]=[];
constructor(private _ActivatedRoute:ActivatedRoute ,private _BooksService:BooksService){
  this.getId()
}
getId(){
 const id= this._ActivatedRoute.snapshot.params['id']
//  console.log(id);
this._BooksService.getBooks().subscribe((res)=>{
  // this.AllBooks=res.data.book[0].categoryId[0]._id
  this.AllBooks=res.data.book

  for(let i=0; i<this.AllBooks.length; i++){
   this.categoryId= this.AllBooks[i]['categoryId'][0]._id
  //  console.log(this.AllBooks[i]['categoryId'][0]._id);
   if(this.categoryId==id){
    // console.log(this.AllBooks[i]);
    this.currentBooks.push(this.AllBooks[i])
    console.log(this.currentBooks);
    
   }
  }
  //  console.log(this.AllBooks);
  

})

}
currentPage = 1; 
itemsPerPage = 6;

}
