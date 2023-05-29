import { Component, Input } from '@angular/core';
import { AvgrateService } from 'src/app/services/avgrate.service';
import { UserbooksService } from 'src/app/services/userbooks.service';
@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {
  @Input() avgrate!:number;
  @Input() status!:string;
  bookid!:string
  constructor(private rateservice:AvgrateService,private userbook:UserbooksService){}
  ngOnInit(){
    
    this.bookid = window.location.pathname.split('/')[2];
     this.rateservice.getAvgRate('1').subscribe((res)=>{
      this.avgrate = Math.round(res)
     })
    //  this.userbook.ngOnInit()
    
  }
  changestatus(e:any){
    
      this.userbook.reseveBook(e.target.value,this.bookid)
  }
}
