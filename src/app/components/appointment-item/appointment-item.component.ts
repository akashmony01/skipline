import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-appointment-item',
  templateUrl: './appointment-item.component.html',
  styleUrls: ['./appointment-item.component.css']
})
export class AppointmentItemComponent {
  @Input() name: string = 'Nikhil Mukherjee Rani Priya';
  @Input() gender: string = 'male';
  @Input() dob: string = '1-2-2004';
  @Input() apptDate: string = '12-12-2024';
  @Input() reason: string = 'this is why';
  @Input() department: string = '145';
  @Input() isComplete: boolean = false;
}
