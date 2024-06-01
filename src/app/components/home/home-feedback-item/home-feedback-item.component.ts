import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-feedback-item',
  templateUrl: './home-feedback-item.component.html',
  styleUrls: ['./home-feedback-item.component.css']
})
export class HomeFeedbackItemComponent {
  @Input() imgUrl: string = 'assets/images/feat1.png';
  @Input() title: string = 'Invoice';
  @Input() clientName: string = 'Module';
  @Input() clientPost: string = 'Adventures Skipline';
  @Input() feedback: string = 'Define your services by setting the price and the service name. Add one or more services when scheduling an appointment, and Skipline automatically calculates the total price,discount and tax. Sit back and relax, Skipline does the math for you.';
}
