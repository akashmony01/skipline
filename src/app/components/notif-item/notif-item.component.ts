import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notif-item',
  templateUrl: './notif-item.component.html',
  styleUrls: ['./notif-item.component.css']
})
export class NotifItemComponent {

  @Input() title: string = '';

  isShowOption: boolean = false;

  toggleOption() {
    this.isShowOption = !this.isShowOption;
  }

}
