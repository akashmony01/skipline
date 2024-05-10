import { Component } from '@angular/core';

interface ImageObject {
  url: string;
  alt: string;
}

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
  
  logo_img: ImageObject = {
    url: 'assets/images/logo.svg',
    alt: 'Logo Image'
  }
  banner_img: ImageObject = {
    url: 'assets/images/login_img.png',
    alt: 'Login screen img'
  };

}
