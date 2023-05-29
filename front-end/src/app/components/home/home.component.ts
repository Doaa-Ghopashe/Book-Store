import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { BooksService } from 'src/app/services/books.service';
import { CategoryService } from 'src/app/services/category.service';
import { AuthorService } from 'src/app/services/author.service';
import { Book } from 'src/app/interfaces/book';
import Swiper from 'swiper';
import Typed from 'typed.js';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  books!:any;
  category!:any[];
  author!:any[];
  img=`localhost:5000`
  // [
  //   {image : '../../../assets/images/work-3.jpg'},
  //   {image : '../../../assets/images/work-1.jpg'},
  //   {image : '../../../assets/images/work-2.jpg'},
  //   {image : '../../../assets/images/work-3.jpg'},
  //   {image : '../../../assets/images/work-1.jpg'},

  //   {image : '../../../assets/images/work-2.jpg'},
  //   {image : '../../../assets/images/work-3.jpg'},
  //   {image : '../../../assets/images/work-1.jpg'},
  //   {image : '../../../assets/images/work-2.jpg'},
  //   {image : '../../../assets/images/work-3.jpg'},
  //   {image : '../../../assets/images/work-1.jpg'},
  //   {image : '../../../assets/images/work-2.jpg'}
  // ]
  
constructor(private _BooksService:BooksService,private _CategoryService:CategoryService,private _AuthorService:AuthorService){}
getBook(){
 this._BooksService.getBooks().subscribe((data)=>{
  this.books=data.data.book.slice(0,10)
  // console.log(this.books.photo);

  // this.img=this.books.photo.slice(5);
 })
}
 getCategory(){
  this._CategoryService.getCategory().subscribe((data)=>{
   this.category=data.data.categories.slice(0,10)

  })
 }

 getAuthor(){
  this._AuthorService.getAuthor().subscribe((data)=>{
   this.author=data.slice(0,10)
  //  console.log(this.author);
 
  })
 }
  ngOnInit() {
  this.getBook();
  this.getCategory();
   this.getAuthor();
    var typed = new Typed('#typed', {
      stringsElement: '#typed-strings',
      typeSpeed: 50,
      backSpeed: 50,
      loop:true,
      loopCount: Infinity,
    });
    
  }



  customOptions: OwlOptions = {
    loop: true,
    autoplay:true,
    autoplaySpeed:100,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
     nav: false
  }



}

