import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
    <h5>Todo list</h5>
    <ol>
      <li>Fill Summary functionlities</li>
    </ol>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
