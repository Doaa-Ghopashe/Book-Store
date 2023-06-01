import { Component, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  @Input() review!: string

  constructor(private http: HttpClient, private reviewService: ReviewService) { }
  sendReview(e: any) {
    e.preventDefault();
    if (this.review) {
      const headers = new HttpHeaders()
        .set('Authorization', 'my-auth-token')
        .set('Content-Type', 'application/json');

      this.http.post('http://localhost:5000/review', JSON.stringify({ review: this.review, book_id: "1", user_id: "5" }), {
        headers: headers
      }).subscribe()

      this.reviewService.setReviews()

      this.review = '';
    }

  }

}
