import { Component, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { FormatTimePipe } from '../Pipes/format-time.pipe';

@Component({
  selector: 'app-counter30-minutes',
  templateUrl: './counter30-minutes.component.html',
  styleUrls: ['./counter30-minutes.component.scss']
})
export class Counter30MinutesComponent implements OnInit {
  countDown: Subscription;
  counter = 10;
  tick = 1000;
  
  ngOnInit() {
    this.countDown = timer(0, this.tick).subscribe(() => --this.counter);
  }
  ngOnDestroy() {
    console.log(this.counter)
    this.countDown = null;
    
  }

  stopTimer(){
    if(typeof this.counter !== "undefined"){
      clearInterval(this.tick);
      this.counter = 0;
    }
    this.countDown = null;
    let data = {
      'time': timer
    };
    
    localStorage.setItem('timer', JSON.stringify(data))
    data = JSON.parse(localStorage.getItem('timer'))
    console.log(data)
  }

  elapsedtime(){
  }
}
