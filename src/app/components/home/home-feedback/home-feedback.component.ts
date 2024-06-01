import { Component } from '@angular/core';
import Splide from '@splidejs/splide';

@Component({
  selector: 'app-home-feedback',
  templateUrl: './home-feedback.component.html',
  styleUrls: ['./home-feedback.component.css']
})
export class HomeFeedbackComponent {
  ngAfterViewInit(): void {
    new Splide('#feedbaackCarousel', {
      type: 'loop',
      perMove: 1,
      gap: '20px',
      perPage: 3,
      pagination: false,
      autoplay: true,
      interval: 3000,
      breakpoints: {
        1200: {
          perPage: 2,
        },
        991: {
          perPage: 1,
        }
      },
    }).mount();
  }
}
