import { Component } from '@angular/core';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.css']
})
export class HomeHeaderComponent {
  showMobileMenu: boolean = false;

  toggleMobileMenu() {
    const header : HTMLElement | null = document.getElementById('headerSec');

    if(header){
      if(this.showMobileMenu){
        header.classList.remove('fadeIn');
        header.classList.add('fadeOut');

        setTimeout(() => {
          header.classList.remove('active');
          this.showMobileMenu = false;
        }, 300);
      }else {
        header.classList.remove('fadeOut');
        header.classList.add('fadeIn');
        header.classList.add('active');

        setTimeout(() => {
          this.showMobileMenu = true;
        }, 300);
      }
    }
  }
}
