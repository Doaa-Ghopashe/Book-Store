import { Component } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  
  books:any[]=
  [
    {image : '../../../assets/images/work-1.jpg'},
    {image : '../../../assets/images/work-3.jpg'},
    {image : '../../../assets/images/work-6.jpg'},
    {image : '../../../assets/images/work-1.jpg'},
   
  ]



  ngOnInit() {


    var swiper = new Swiper('.books-slider', {
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });

   
  }

}
