import { Component } from '@angular/core';

@Component({
  selector: 'app-user-books',
  templateUrl: './user-books.component.html',
  styleUrls: ['./user-books.component.scss']
})
export class MyBoosComponent {
  constructor()
  {
    this.getAll("all")
  }


  currentContect:any[]=[];

  all:any[]=[
    {img:"../../../assets/images/360_F_339709134_9FKW6cgJi0uosfWb2bD4zdcerTvRvNXv.jpg",name:"aya",auther:"moustafa",avg:"44",rate:3},
    {img:"../../../assets/images/360_F_339709134_9FKW6cgJi0uosfWb2bD4zdcerTvRvNXv.jpg",name:"aya",auther:"moustafa",avg:"44",rate:3},
    {img:"../../../assets/images/360_F_339709134_9FKW6cgJi0uosfWb2bD4zdcerTvRvNXv.jpg",name:"aya",auther:"moustafa",avg:"44",rate:3},
    {img:"../../../assets/images/360_F_339709134_9FKW6cgJi0uosfWb2bD4zdcerTvRvNXv.jpg",name:"aya",auther:"moustafa",avg:"44",rate:3},
    {img:"../../../assets/images/360_F_339709134_9FKW6cgJi0uosfWb2bD4zdcerTvRvNXv.jpg",name:"aya",auther:"moustafa",avg:"44",rate:3},
    {img:"../../../assets/images/360_F_339709134_9FKW6cgJi0uosfWb2bD4zdcerTvRvNXv.jpg",name:"aya",auther:"moustafa",avg:"44",rate:3},
    {img:"../../../assets/images/360_F_339709134_9FKW6cgJi0uosfWb2bD4zdcerTvRvNXv.jpg",name:"aya",auther:"moustafa",avg:"44",rate:3},
    {img:"../../../assets/images/360_F_339709134_9FKW6cgJi0uosfWb2bD4zdcerTvRvNXv.jpg",name:"aya",auther:"moustafa",avg:"44",rate:3},
    {img:"../../../assets/images/360_F_339709134_9FKW6cgJi0uosfWb2bD4zdcerTvRvNXv.jpg",name:"aya",auther:"moustafa",avg:"44",rate:3},
    {img:"../../../assets/images/360_F_339709134_9FKW6cgJi0uosfWb2bD4zdcerTvRvNXv.jpg",name:"aya",auther:"moustafa",avg:"44",rate:3},
    {img:"../../../assets/images/360_F_339709134_9FKW6cgJi0uosfWb2bD4zdcerTvRvNXv.jpg",name:"aya",auther:"moustafa",avg:"44",rate:3},
    {img:"../../../assets/images/360_F_339709134_9FKW6cgJi0uosfWb2bD4zdcerTvRvNXv.jpg",name:"aya",auther:"moustafa",avg:"44",rate:3}
  ]
  currentRed:any[]=[
    {img:"../../../assets/images/360_F_339709134_9FKW6cgJi0uosfWb2bD4zdcerTvRvNXv.jpg",name:"aya",auther:"moustafa",avg:"44",rate:3},
    {img:"../../../assets/images/360_F_339709134_9FKW6cgJi0uosfWb2bD4zdcerTvRvNXv.jpg",name:"aya",auther:"moustafa",avg:"44",rate:3},
    {img:"../../../assets/images/360_F_339709134_9FKW6cgJi0uosfWb2bD4zdcerTvRvNXv.jpg",name:"aya",auther:"moustafa",avg:"44",rate:3},
    {img:"../../../assets/images/360_F_339709134_9FKW6cgJi0uosfWb2bD4zdcerTvRvNXv.jpg",name:"aya",auther:"moustafa",avg:"44",rate:3},
    {img:"../../../assets/images/360_F_339709134_9FKW6cgJi0uosfWb2bD4zdcerTvRvNXv.jpg",name:"aya",auther:"moustafa",avg:"44",rate:3},
    {img:"../../../assets/images/360_F_339709134_9FKW6cgJi0uosfWb2bD4zdcerTvRvNXv.jpg",name:"aya",auther:"moustafa",avg:"44",rate:3},
  ]
  reading:any[]=[
    {img:"../../../assets/images/360_F_339709134_9FKW6cgJi0uosfWb2bD4zdcerTvRvNXv.jpg",name:"aya",auther:"moustafa",avg:"44",rate:3},
  ]
  wantToRead:any[]=[
    {img:"../../../assets/images/360_F_339709134_9FKW6cgJi0uosfWb2bD4zdcerTvRvNXv.jpg",name:"aya",auther:"moustafa",avg:"44",rate:3},
    {img:"../../../assets/images/360_F_339709134_9FKW6cgJi0uosfWb2bD4zdcerTvRvNXv.jpg",name:"aya",auther:"moustafa",avg:"44",rate:3},
    
  ]
  items: any[]=[]; // your list of items
  currentPage = 1; // start with the first page
  itemsPerPage = 5; // show 5 items per page



getAll(yes:any){
  if(yes == 'all')
  {
    this.currentContect = this.all;
    this.items = this.currentContect;
  }
  else if(yes == 'read')
  {
    this.currentContect = this.reading;
    this.items = this.currentContect;
  }
  else if(yes == 'currentReading')
  {
    this.currentContect = this.currentRed;
    this.items = this.currentContect;
  }
  else if(yes == 'wantToRead')
  {
    this.currentContect = this.wantToRead;
    this.items = this.currentContect;
  }
}
}