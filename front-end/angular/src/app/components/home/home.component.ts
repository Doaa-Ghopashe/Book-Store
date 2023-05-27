import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import Swiper from 'swiper';
import Typed from 'typed.js';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  books:any[]=
  [
    {image : '../../../assets/images/work-3.jpg'},
    {image : '../../../assets/images/work-1.jpg'},
    {image : '../../../assets/images/work-2.jpg'},
    {image : '../../../assets/images/work-3.jpg'},
    {image : '../../../assets/images/work-1.jpg'},
    {image : '../../../assets/images/work-2.jpg'},
    {image : '../../../assets/images/work-3.jpg'},
    {image : '../../../assets/images/work-1.jpg'},
    {image : '../../../assets/images/work-2.jpg'},
    {image : '../../../assets/images/work-3.jpg'},
    {image : '../../../assets/images/work-1.jpg'},
    {image : '../../../assets/images/work-2.jpg'}
  ]
  



  ngOnInit() {

    var typed = new Typed('#typed', {
      stringsElement: '#typed-strings',
      typeSpeed: 50,
      backSpeed: 50,
      loop:true,
      loopCount: Infinity,
    });
    
  }



  customOptions: OwlOptions = {
    loop: true,
    autoplay:true,
    autoplaySpeed:100,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
     nav: false
  }



}

