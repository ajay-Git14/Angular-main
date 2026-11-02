import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-legacy-profile',
  standalone: true,
  templateUrl: './legacy-profile.component.html'
})
export class LegacyProfileComponent {
  // Module 02 lesson 10: the parent passes data down with [name].
  @Input({ required: true }) name = '';

  // A strongly typed EventEmitter sends an event back to the parent.
  @Output() readonly selected = new EventEmitter<string>();

  choose(): void {
    this.selected.emit(this.name.trim() || 'Anonymous learner');
  }
}

