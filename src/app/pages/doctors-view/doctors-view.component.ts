import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

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
}
