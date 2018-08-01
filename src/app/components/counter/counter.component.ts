import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  counter = 1;

  constructor() {
  }

  ngOnInit() {
  }

  incerement() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }
}
