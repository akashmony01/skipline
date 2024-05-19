import { Component, Input } from '@angular/core';
import { ImageObject } from 'src/app/models/app.models';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  logoImg: ImageObject = {
    url: 'assets/images/logo.svg',
    alt: 'Logo Image'
  }
  careImg: ImageObject = {
    url: 'assets/images/care.svg',
    alt: 'Care Image'
  }
}
