import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RobotListComponent } from './components/robot-list/robot-list.component';
import { PartListComponent } from './components/part-list/part-list.component';
import { SummaryComponent } from './components/summary/summary.component';
import { CounterComponent } from './components/counter/counter.component';

const routes: Routes = [
  {path: '', redirectTo: '/summary', pathMatch: 'full'},
  {path: 'robots', component: RobotListComponent},
  {path: 'parts', component: PartListComponent},
  {path: 'summary', component: SummaryComponent},
  {path: 'counter', component: CounterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
