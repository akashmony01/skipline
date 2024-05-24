import { Component } from '@angular/core';
import { ImageObject } from 'src/app/models/app.models';

@Component({
  selector: 'app-dashboard-content-wrapper',
  templateUrl: './dashboard-content-wrapper.component.html',
  styleUrls: ['./dashboard-content-wrapper.component.css']
})
export class DashboardContentWrapperComponent {
  sectionBgImg: ImageObject = {
    url: 'assets/images/flag1.jpg',
    alt: 'Header Image'
  }  
}
