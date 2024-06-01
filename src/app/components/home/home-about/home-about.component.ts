import { Component } from '@angular/core';
import { ImageObject } from 'src/app/models/app.models';

@Component({
  selector: 'app-home-about',
  templateUrl: './home-about.component.html',
  styleUrls: ['./home-about.component.css']
})
export class HomeAboutComponent {
  desktopAboutImg: ImageObject = {
    url: 'assets/images/about.png',
    alt: 'Care Image'
  }
  mobileAboutImg: ImageObject = {
    url: 'assets/images/about2.png',
    alt: 'Care Image'
  }
}
