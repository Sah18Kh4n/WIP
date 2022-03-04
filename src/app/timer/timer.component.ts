import { Time } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit, OnDestroy {

  private subcription!:Subscription;

   dateNow = new Date();
   dDay = new Date('Jan 01 2022 00:00:00');
    milliSecondsInASecond = 1000;
    hoursInADay = 24;
    minutesInAnHour = 60;
    SecondsInAMinute  = 60;

     timeDifference:any;
     secondsToDday:any;
     minutesToDday:any;
     hoursToDday:any;
     daysToDday:any;

  constructor() { }

  ngOnDestroy(): void {
    this.subcription.unsubscribe();
  }

  ngOnInit(): void {
    this.subcription = interval(1000).subscribe(x => {
      this.allocateTimeUnits(this.timeDifference);
    })
  }

  getTimeDiffe(){
    this.timeDifference = this.dDay.getTime() - new Date().getTime();
    this.allocateTimeUnits(this.timeDifference);
  }

  allocateTimeUnits(timeDifference:number){
    this.secondsToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond) % this.SecondsInAMinute);

    this.minutesToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour) % this.SecondsInAMinute);

    this.hoursToDday  = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute) % this.hoursInADay);

    this.daysToDday = Math.floor((timeDifference) /  (this.milliSecondsInASecond *this.minutesInAnHour * this.SecondsInAMinute * this.hoursInADay));
  }
}
