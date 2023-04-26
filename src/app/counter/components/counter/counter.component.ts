import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }}</h3>

    <button (click)="increaseBy(5)">Increment + 1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="decreaseBy(2)">Decrement - 1</button>
  `,
})
export class CounterComponent {
  public counter: number = 10;

  increaseBy(value: number = 1): void {
    this.counter += value;
  }

  decreaseBy(value: number = 1): void {
    this.counter -= value;
  }

  reset(): void {
    this.counter = 10;
  }
}
