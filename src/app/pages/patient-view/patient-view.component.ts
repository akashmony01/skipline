import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-patient-view',
  templateUrl: './patient-view.component.html',
  styleUrls: ['./patient-view.component.css']
})
export class PatientViewComponent {
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
