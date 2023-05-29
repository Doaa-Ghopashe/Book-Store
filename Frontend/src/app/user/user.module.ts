import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAccountComponent } from './user-account/user-account.component';
import { UserReviewsComponent } from './user-reviews/user-reviews.component';
import { UserBookComponent } from './user-books/user-books.component';
import {NgxPaginationModule} from 'ngx-pagination'; 



@NgModule({
  declarations: [
    UserAccountComponent,
    UserReviewsComponent,
    UserBookComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule
  ],
  exports:[
    UserAccountComponent,
    UserReviewsComponent,
    UserBookComponent
  ]
})
export class UserModule { }
