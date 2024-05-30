import { Component, Input } from '@angular/core';
import { ImageObject } from 'src/app/models/app.models';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  careImg: ImageObject = {
    url: 'assets/images/care.svg',
    alt: 'Care Image'
  }
}
