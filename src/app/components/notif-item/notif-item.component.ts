import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notif-item',
  templateUrl: './notif-item.component.html',
  styleUrls: ['./notif-item.component.css']
})
export class NotifItemComponent {

  @Input() title: string;

  constructor() {
    this.title = '';
  }

  is_show_option: boolean = false;

  toggleOption() {
    this.is_show_option = !this.is_show_option;
  }

}
