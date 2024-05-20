import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-input-item-search',
  templateUrl: './input-item-search.component.html',
  styleUrls: ['./input-item-search.component.css']
})
export class InputItemSearchComponent {

  @Input() name: string = '';
  @Input() id: string = '';
  @Input() style: { [key: string]: string } = {};
  @Input() label: string = 'Input Label';
  @Input() placeholder: string = 'Input placeholder';
  @Input() value: string = '';

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
