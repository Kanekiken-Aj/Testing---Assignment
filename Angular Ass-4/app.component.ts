// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="incrementCounter()">Click Me</button>
    <p>Counter: {{ counter }}</p>
  `
})
export class AppComponent {
  counter: number = 0;

  incrementCounter(): void {
    this.counter++;
  }
}
