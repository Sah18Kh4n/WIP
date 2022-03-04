import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScreenThreeComponent } from './screen-three/screen-three.component';
import { ScreenTwoComponent } from './screen-two/screen-two.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Screen1NavComponent } from './screen1-nav/screen1-nav.component';
import { Screen1TableComponent } from './screen1-table/screen1-table.component';
import { CatalogDashboardComponent } from './catalog-dashboard/catalog-dashboard.component';
import { ElapsedTimeComponent } from './elapsed-time/elapsed-time.component';
import { FormatTimePipe } from './Pipes/format-time.pipe';
import { TimerComponent } from './timer/timer.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { Counter30MinutesComponent } from './counter30-minutes/counter30-minutes.component';


@NgModule({
  declarations: [
    AppComponent,
    ScreenThreeComponent,
    ScreenTwoComponent,
    Screen1NavComponent,
    Screen1TableComponent,
    CatalogDashboardComponent,
    ElapsedTimeComponent,
    FormatTimePipe,
    TimerComponent,
    CountdownTimerComponent,
    Counter30MinutesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
