// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <input type="text" [(ngModel)]="inputValue" (input)="onInputChange()">
    <p>Input Value: {{ inputValue }}</p>
  `
})
export class AppComponent {
  inputValue: string = '';

  onInputChange(): void {
    // Do something when input value changes
  }
}
