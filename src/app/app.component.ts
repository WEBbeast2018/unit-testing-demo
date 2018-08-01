import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--<app-header></app-header>-->
    <router-outlet></router-outlet>
    <h5>Todo list</h5>
    <ol>
      <li>Fill Summary functionality</li>
      <li>Test All functions in SummaryComponent</li>
      <li>Create Util service which will contain Utility function (filterByGPU, sortByNumber, sortByString)</li>
      <li>Move tests to Util service spec which </li>
    </ol>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
