import { Component, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-input-item',
  templateUrl: './input-item.component.html',
  styleUrls: ['./input-item.component.css']
})
export class InputItemComponent {

  @Input() name: string = '';
  @Input() id: string = '';
  @Input() styleForValue: { [key: string]: string } = {};
  @Input() label: string = 'Input Label';
  @Input() placeholder: string = '';
  @Input() value: string = '';
  @Input() type: string = 'text';
  @Input() designMode: string = '';
  @Input() readonly: boolean = false;
  @Input() bgAlways: boolean = false;

  isFocused: boolean = false;

  @ViewChild('inputField') inputField!: ElementRef;

  focusInput() {
    if(this.inputField){
      this.inputField.nativeElement.focus();
    }
  }

  onFocus() {
    this.isFocused = true;
  }

  onBlur() {
    this.isFocused = false;
  }

  openPicker() {
    this.inputField.nativeElement.showPicker();
  }
}
