import { Component } from '@angular/core';
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
}
