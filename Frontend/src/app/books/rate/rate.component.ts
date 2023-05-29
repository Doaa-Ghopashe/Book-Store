import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AvgrateService } from 'src/app/services/avgrate.service';
@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.scss']
})
export class RateComponent {
    ratingcontrol = new FormControl(0)

    constructor(private http : HttpClient,private rateservice:AvgrateService){}

    
     addStar()
    {
      const headers = new  HttpHeaders()
            .set('Authorization', 'my-auth-token')
            .set('Content-Type', 'application/json');
      this.http.post('http://localhost:5000/rate', JSON.stringify({ rate_val: this.ratingcontrol.value, book_id: "1", user_id: "10" }), {
        headers
      }).subscribe();      

      // this.rateservice.setAvgRate(this.ratingcontrol.value)
    }
    
}
