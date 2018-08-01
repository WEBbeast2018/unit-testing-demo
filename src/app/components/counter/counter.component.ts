import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  counter = 1;
  min = 1;
  max = 5;

  constructor() {
  }

  ngOnInit() {
  }

  incerement() {
    if (this.counter < this.max) {
      this.counter++;
    }
  }

  decrement() {
    if (this.counter > this.min) {
      this.counter--;
    }
  }
}
