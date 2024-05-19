import { Component } from '@angular/core';
import { ImageObject } from 'src/app/models/app.models';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.css']
})
export class DashboardHeaderComponent {
  headerBgImg: ImageObject = {
    url: 'assets/images/dashboard-header-bg.svg',
    alt: 'Header Image'
  }

  searchKey: String = '';

  onSubmit(form: NgForm) {
    const inputField : HTMLElement | null = document.getElementById('searchInput');

    if(this.searchKey.length > 0){
      // form.ngSubmit.emit();
      console.log('Search Form Submitted!', form.value);
    }else{
      inputField?.focus();
    }
  }
}
