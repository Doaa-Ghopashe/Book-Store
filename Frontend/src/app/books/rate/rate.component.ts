import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Rate } from 'src/app/interfaces/rate';
import { AvgrateService } from 'src/app/services/avgrate.service';
import jwt_decode from 'jwt-decode';
@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.scss']
})
export class RateComponent {
  ratingcontrol = new FormControl(0);
  book_id!: string;
  user_id: string = "20";
  ratedbook!: any;
  allratedbooks!: Rate[];
  url:string = 'http://localhost:5000/rate';
  token !: string ;

  constructor(private _http: HttpClient, private rateservice: AvgrateService, private activetedrouter: ActivatedRoute) { }
  
  ngOnInit() {
    this.book_id = this.activetedrouter.snapshot.params['id'];
    this._http.get('http://localhost:5000/rate').subscribe((ratedbooks: any) => {
      this.allratedbooks = ratedbooks
    })
    // console.log(localStorage.getItem('token'))
    this.token  = localStorage.getItem('token')|| '';
    const tokenInfo = this.getDecodedAccessToken(this.token);
    this.user_id = tokenInfo?.['user_id']
  }

  addStar() {

    if (this.allratedbooks.length) {
      //if the ratedbooks contains data so loop inisde this data
      this.ratedbook = this.allratedbooks.filter((data) =>
        data['book_id'] == this.book_id && data['user_id'] == this.user_id
      )

      if(this.ratedbook.length != 0)
      {
        this.ratedbook[0].rate_val = this.ratingcontrol.value;

        this._http.put(this.url+`/${this.ratedbook[0]['_id']}`,this.ratedbook[0]).subscribe();

        this.rateservice.countAvgRate(this.book_id).subscribe()
      }else{
        const headers = new HttpHeaders()
          .set('Authorization', 'my-auth-token')
          .set('Content-Type', 'application/json');

        this._http.post(this.url,JSON.stringify({rate_val:this.ratingcontrol.value,
        book_id:this.book_id, user_id:this.user_id}),{
          headers:headers
        }).subscribe();

        this.rateservice.countAvgRate(this.book_id).subscribe()
      }
    }else{
      const headers = new HttpHeaders()
        .set('Authorization', 'my-auth-token')
        .set('Content-Type', 'application/json');

      this._http.post(this.url, JSON.stringify({ rate_val: this.ratingcontrol.value, book_id: this.book_id, user_id: this.user_id }), {
        headers: headers
      }).subscribe();

      this.rateservice.countAvgRate(this.book_id).subscribe()
    }
  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch(Error) {
      return null;
    }
  }
}
