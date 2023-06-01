import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book } from '../interfaces/book';
import { BooksService } from './books.service';

@Injectable({
  providedIn: 'root'
})
export class AvgrateService {
  //need the number of raters
  //need the summation of rates
  //all of this according to speco

  private ratelist = new BehaviorSubject([]);
  counter: number = 0
  private readerscount = new BehaviorSubject(0);
  private book = new BehaviorSubject({});

  pubBook = this.book.asObservable()
  pubReadersCount = this.readerscount.asObservable();
  totalrate: number = 0
  pubRateList = this.ratelist.asObservable()
  private avgrate = new BehaviorSubject(0);
  pubAvgRateVal = this.avgrate.asObservable();

  constructor(private _http: HttpClient, private bookservice: BooksService) {
    this._http.get('http://localhost:5000/rate').subscribe((res: any) => this.ratelist.next(res))
  }
  countAvgRate(bookid: string) {
    this.totalrate = 0
    //here we get the book data
    this.bookservice.getSpecificBook(bookid).subscribe((res: any) => {
      this.book.next(res)
    })
    //we search on rate list for the book we stopped on 
    this.pubRateList.subscribe((res) => {
      res.filter((rateObj) => {

        if (rateObj['book_id'] == bookid) {
          //after getting the rate records of this book we add all rates and the number of records
          this.totalrate += rateObj['rate_val'];

          this.readerscount.next(res.length)
        }
        //we count the average by dividing the total rate on the total records and assign it to the var avgrate
        this.avgrate.next(Math.round(this.totalrate / this.readerscount.value))
        
        //store the result on book model specifically on the avgRating property
        this.book.subscribe((res: any) => res.avgRating = this.avgrate)

      })

    })
    //update the book record in the model
    // this._http.put(`http://localhost:5000/book/${bookid}`, this.book).subscribe()

    return this.pubAvgRateVal
  }

  getAvgRate() {
    return this.pubAvgRateVal
  }


}
