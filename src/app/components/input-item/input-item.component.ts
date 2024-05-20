import { Component, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-input-item',
  templateUrl: './input-item.component.html',
  styleUrls: ['./input-item.component.css']
})
export class InputItemComponent {

  @Input() name: string = '';
  @Input() id: string = '';
  @Input() style: { [key: string]: string } = {};
  @Input() label: string = 'Input Label';
  @Input() placeholder: string = 'Input placeholder';
  @Input() value: string = '';
  @Input() type: string = 'text';

  isFocused: boolean = false;

  @ViewChild('inputField') inputField!: ElementRef;

  focusInput() {
    this.inputField.nativeElement.focus();
  }

  onFocus() {
    this.isFocused = true;
  }

  onBlur() {
    this.isFocused = false;
  }
}
