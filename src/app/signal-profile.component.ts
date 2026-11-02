import { Component, input, model, output } from '@angular/core';

@Component({
  selector: 'app-signal-profile',
  standalone: true,
  templateUrl: './signal-profile.component.html'
})
export class SignalProfileComponent {
  // input.required() is read-only; the parent provides it via [name].
  readonly name = input.required<string>();

  // output() is the modern typed replacement for EventEmitter outputs.
  readonly selected = output<string>();

  // model() adds a writable input plus automatic likesChange output.
  readonly likes = model(0);

  select(): void {
    this.selected.emit(this.name().trim() || 'Anonymous learner');
  }

  addLike(): void {
    this.likes.update((value) => value + 1);
  }
}

