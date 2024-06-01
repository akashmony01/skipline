import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import Splide from '@splidejs/splide';

@Component({
  selector: 'app-doctors-view',
  templateUrl: './doctors-view.component.html',
  styleUrls: ['./doctors-view.component.css']
})
export class DoctorsViewComponent {

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

  ngAfterViewInit(): void {
    new Splide('#activePatientCarousel', {
      perMove: 1,
      gap: '20px',
      pagination: false,
      perPage: 3,
      breakpoints: {
        1200: {
          perPage: 2,
        },
        991: {
          perPage: 1,
        }
      },
    }).mount();
    new Splide('#completedPatientCarousel', {
      perMove: 1,
      gap: '20px',
      perPage: 3,
      pagination: false,
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
