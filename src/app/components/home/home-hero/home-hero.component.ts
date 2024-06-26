import { Component } from '@angular/core';
import Splide from '@splidejs/splide';
import { ImageObject } from 'src/app/models/app.models';

@Component({
  selector: 'app-home-hero',
  templateUrl: './home-hero.component.html',
  styleUrls: ['./home-hero.component.css']
})
export class HomeHeroComponent {
  desktopHeroImg: ImageObject = {
    url: 'assets/images/hero.png',
    alt: 'Care Image'
  }
  mobileHeroImg: ImageObject = {
    url: 'assets/images/hero2.png',
    alt: 'Care Image'
  }
  cmImg: ImageObject = {
    url: 'assets/images/cm.png',
    alt: 'chief minister'
  }
  hmImg: ImageObject = {
    url: 'assets/images/hm.png',
    alt: 'health minister'
  };

  ngAfterViewInit(): void {
    new Splide('.heroCarouselDesktop', {
      perMove: 1,
      type: 'fade',
      rewind: true,
      pagination: false,
      perPage: 1,
      arrows: false,
      autoplay: true,
    }).mount();
    new Splide('.heroCarouselMobile', {
      perMove: 1,
      type: 'fade',
      rewind: true,
      pagination: false,
      perPage: 1,
      arrows: false,
      autoplay: true,
    }).mount();
  }
}
