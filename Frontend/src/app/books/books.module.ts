import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books/books.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { CatrgoriesComponent } from './catrgories/catrgories.component';
import { PostComponent } from './post/post.component';
import { RateComponent } from './rate/rate.component';
import { ReviewsComponent } from './reviews/reviews.component';



@NgModule({
  declarations: [
    BooksComponent,
    BookDetailsComponent,
    CategoryDetailsComponent,
    CatrgoriesComponent,
    PostComponent,
    RateComponent,
    ReviewsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    BooksComponent,
    BookDetailsComponent,
    CategoryDetailsComponent,
    CatrgoriesComponent,
    PostComponent,
    RateComponent,
    ReviewsComponent
  ]
})
export class BooksModule { }
