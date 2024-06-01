import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-features-item',
  templateUrl: './home-features-item.component.html',
  styleUrls: ['./home-features-item.component.css']
})
export class HomeFeaturesItemComponent {
  @Input() imgUrl: string = 'assets/images/feat1.png';
  @Input() highlightedTitle: string = 'Invoice';
  @Input() normalTitle: string = 'Module';
  @Input() subtitle: string = 'Adventures Skipline';
  @Input() desc: string = 'Define your services by setting the price and the service name. Add one or more services when scheduling an appointment, and Skipline automatically calculates the total price,discount and tax. Sit back and relax, Skipline does the math for you.';
  @Input() link: string = '';
}
