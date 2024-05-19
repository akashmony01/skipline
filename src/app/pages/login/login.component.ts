import { Component, HostListener } from '@angular/core';
import { ImageObject } from 'src/app/models/app.models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  email: string = ''
  password: string = ''

  title: string = 'Welcome Back Skipline!'
  description: string = 'Skipline the best platform for manage your hospital & patient in any hospital'
  
  logoImg: ImageObject = {
    url: 'assets/images/logo.svg',
    alt: 'Logo Image'
  }
  logoImg_white: ImageObject = {
    url: 'assets/images/logo-white.svg',
    alt: 'Logo Image'
  }
  bannerImg: ImageObject = {
    url: 'assets/images/login_img.png',
    alt: 'Login screen img'
  };

  dynamicImgHeight: number = 0;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.setHeight();
  }

  ngOnInit() {
    this.setHeight();
  }

  setHeight() {
    const totalHeight : number | undefined = document.getElementById('loginContainer')?.offsetHeight;
    const contentHeight : number | undefined = document.getElementById('loginLeft')?.offsetHeight;

    if(totalHeight && contentHeight) {
      const imageHeight: number = totalHeight - contentHeight;

      const screenWidth = window.innerWidth;
      
      if (screenWidth < 992) {
        this.dynamicImgHeight = imageHeight + 20;
      } else {
        this.dynamicImgHeight = totalHeight - 70;
      }

    }
  }

}
