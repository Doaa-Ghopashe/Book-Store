import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/interfaces/book';
import { AuthorService } from 'src/app/services/author.service';
import { AvgrateService } from 'src/app/services/avgrate.service';
import { BooksService } from 'src/app/services/books.service';
import { CategoryService } from 'src/app/services/category.service';
import { UserbooksService } from 'src/app/services/userbooks.service';
@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {
  avgrate!:number;
  // @Input() status!:string;
  bookid!:string;
  book!:Book;
  no_of_readers:number=0
  // bookauthorId!:string
  // bookcategoryId!:string
  @Input() authorname!:string
  @Input() bookcategory!:string;
  constructor(private userbook:UserbooksService,
    private listedBooks:BooksService,
    private bookAuthor: AuthorService,
    private bookCategory: CategoryService,
    private activetedrouter:ActivatedRoute,
    private avgrateservice:AvgrateService){}

  ngOnInit(){
    this.bookid = this.activetedrouter.snapshot.params['id']

    this.listedBooks.loadBooks();

    this.listedBooks.getSpecificBook(this.bookid).
    subscribe((res:any)=> this.book = res);

    this.listedBooks.pubBookAuthor.
    subscribe((res:string)=>{
      this.bookAuthor.loadSpecificAuthor(res);
    })
    

    this.bookAuthor.getSpecificAuthor().
    subscribe((res:any)=>this.authorname= res['firstName'] +" "+ res['lastName'] );


    this.listedBooks.pubBookCategory.
    subscribe((res:string)=>{
      this.bookCategory.loadSpecificCategory(res)
    });
    
    this.bookCategory.getSpecificCategory().
    subscribe((res:any)=> this.bookcategory = res?.data?.category?.[0].Name );

    this.avgrateservice.countAvgRate(this.bookid).subscribe()
    this.avgrateservice.pubAvgRateVal.subscribe((res:number)=>{
      this.avgrate = res
    })
    this.avgrateservice.pubReadersCount.subscribe((res:number)=>{
      // console.log(res)
        this.no_of_readers =res
    })
  }
  changestatus(e:any){
      this.userbook.reseveBook(e.target.value,this.bookid)
  }
}
