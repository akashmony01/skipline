import { Component, Input } from '@angular/core';
import { ImageObject } from 'src/app/models/app.models';

@Component({
  selector: 'app-dashboard-header-default',
  templateUrl: './dashboard-header-default.component.html',
  styleUrls: ['./dashboard-header-default.component.css']
})
export class DashboardHeaderDefaultComponent {
  
  @Input() pageTitle: string;

  constructor() {
    this.pageTitle = '';
  }
  
  headerBgImg: ImageObject = {
    url: 'assets/images/dashboard-header-bg.svg',
    alt: 'Header Image'
  }
}
