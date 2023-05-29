import { Component } from '@angular/core';
import { Review } from 'src/app/interfaces/review';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent {
  reviewslist!:Review[];
  constructor(private reviewService:ReviewService) { }
  ngOnInit()
   {
     this.reviewService.reviewslist.subscribe((res:any)=>{
       this.reviewslist = res;
     })
   }
}
