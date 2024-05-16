import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent {
  sidebar_width: number = 300;
  show_sidebar: boolean = true;

  toggleSidebar() {
    this.show_sidebar = !this.show_sidebar;
  }

  constructor() {
    this.hideSidebarOnMobile();
  }

  ngOnInit(): void {
    this.hideSidebarOnMobile();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.hideSidebarOnMobile();
  }

  hideSidebarOnMobile() {
    this.show_sidebar = window.innerWidth > 768;
  }

  setPaddingBasedOnWindow(padding: number){
    if(window.innerWidth > 768){
      return padding;
    }else{
      return 0;
    }
  }
}
