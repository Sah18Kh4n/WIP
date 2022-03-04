import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { timer } from 'rxjs';

import { CatalogDashboardComponent } from './catalog-dashboard/catalog-dashboard.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { Counter30MinutesComponent } from './counter30-minutes/counter30-minutes.component';
import { ElapsedTimeComponent } from './elapsed-time/elapsed-time.component';
import { ScreenThreeComponent } from './screen-three/screen-three.component';
import { ScreenTwoComponent } from './screen-two/screen-two.component';
import { Screen1NavComponent } from './screen1-nav/screen1-nav.component';
import { TimerComponent } from './timer/timer.component';

const routes: Routes = [
  {
    path: '',
    component: Screen1NavComponent,
  },
  {
    path: 'screen2',
    component: ScreenTwoComponent,
  },
  {
    path: 'screen3',
    component: ScreenThreeComponent,
  },
  {
    path: 'screen4',
    component: CatalogDashboardComponent
  },
  {
    path:'elapsedtime',
    component:ElapsedTimeComponent
  },
  {
    path:'timer',
    component:CountdownTimerComponent
  },
  {
    path:'timer30min',
    component:Counter30MinutesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
