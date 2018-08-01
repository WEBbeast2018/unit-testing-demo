import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
    <h5>Todo list</h5>
    <ol>
      <li>Test Counter functionality</li>
      <li>Fill Summary functionality</li>
      <li>Test Summary data-set calls</li>
      <li>Move utilities to a separate service and test it</li>
      <li>Split Summary into Smart / presentational components</li>
      <li>Bonus: test data services with mockHttp </li>
    </ol>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
