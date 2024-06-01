import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-faq-item',
  templateUrl: './home-faq-item.component.html',
  styleUrls: ['./home-faq-item.component.css']
})
export class HomeFaqItemComponent {
  @Input() question: string = 'This is the question';
  @Input() answer: string = 'This is the answer';

  isShowAnswer: boolean = false;

  toggleAnswer() {
    this.isShowAnswer = !this.isShowAnswer;
  }
}
