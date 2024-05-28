import { Component } from '@angular/core';
import { ImageObject } from 'src/app/models/app.models';

@Component({
  selector: 'app-background-image',
  templateUrl: './background-image.component.html',
  styleUrls: ['./background-image.component.css']
})
export class BackgroundImageComponent {
  sectionBgImg: ImageObject = {
    url: 'assets/images/flag1.jpg',
    alt: 'Header Image'
  }
}
