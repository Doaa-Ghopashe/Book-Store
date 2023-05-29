import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAccountComponent } from './user-account/user-account.component';
import { UserReviewsComponent } from './user-reviews/user-reviews.component';
import { UserbooksService } from '../services/userbooks.service';



@NgModule({
  declarations: [
    UserAccountComponent,
    UserReviewsComponent,
    UserbooksService
  ],
  imports: [
    CommonModule
  ],
  exports:[
    UserAccountComponent,
    UserReviewsComponent,
    UserbooksService
  ]
})
export class UserModule { }
