import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent {
  selectedRadioButton: string = 'All';

  @Output() filterRadioButton: EventEmitter<string> =
    new EventEmitter<string>();

  onRadioButton() {
    this.filterRadioButton.emit(this.selectedRadioButton);
  }
}
