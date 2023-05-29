import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AvgrateService {
  //need the number of raters
  //need the summation of rates
  //all of this according to speco

  private allrates = new BehaviorSubject([])
  readerscount:number = 0 ;
  totalrate:number = 0
  ratelist = this.allrates.asObservable()
  private avgrate = new BehaviorSubject(0);
  avgrateval = this.avgrate.asObservable();
  
  constructor(private http:HttpClient) {
    this.http.get('http://localhost:5000/rate').subscribe((res:any)=>{
      this.allrates.next(res)
      // this.avgrate.next(res.data.book[0].avgRating)
    })
   }
   getAvgRate(bookid:string)
   {
    
    this.ratelist.subscribe((res)=>{
      res.filter((rateObj)=>{

        if(rateObj['book_id']==bookid)
        {
          // console.log(rateObj['rate_val'])
          this.totalrate += rateObj['rate_val'];
          this.readerscount++;
        }
        // console.log(this.totalrate)
        this.avgrate.next(this.totalrate/this.readerscount)
        // console.log(this.readerscount)
      })
      
    })
    
    
    return this.avgrateval
   }

   

}
