import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-item-search-list',
  templateUrl: './input-item-search-list.component.html',
  styleUrls: ['./input-item-search-list.component.css']
})
export class InputItemSearchListComponent {
  @Input() title: string = 'This is teh title';
  @Input() placeholder: string = '';
  @Input() name: string = '';
  @Input() id: string = '';
}
