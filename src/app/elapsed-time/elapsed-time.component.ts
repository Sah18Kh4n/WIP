import { Component, OnDestroy, OnInit } from '@angular/core';
import { ElapsedTimeDetails } from '../Interfaces/elapsed-time-details';
import { DateAndTimeHandlingService } from '../Services/date-and-time-handling.service';

@Component({
  selector: 'app-elapsed-time',
  templateUrl: './elapsed-time.component.html',
  styleUrls: ['./elapsed-time.component.scss']
})
export class ElapsedTimeComponent implements OnInit{

  // countDown: Subscription = new Subscription;

  // //counter for 5 minutes in seconds
  // counter = 300;
  // tick = 000;

  // ngOnDestroy(): void {
  //   this.counter = 0;
  // }

  // ngOnInit(): void {
  //   this.countDown = timer(0, this.tick).subscribe(() => --this.counter)
  //   console.log(this.tick)
  //   console.log(this.countDown)
  // }

  constructor(public timeAndDateHandlingService:DateAndTimeHandlingService){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // /** Stores the elapsed time as a string */
  elapsedTimeText = "00:00";

  /** Stores the reference to the elapsed time interval*/
  elapsedTimeIntervalRef : any;

  // /** Stores the start time of timer */
  startTime: any;

  /** Determines whether or not to display the start button */
  displayStartButton = true;

  // /** Stores the details of elapsed time when paused */
  elapsedTimeWhenPaused!: ElapsedTimeDetails;

  // /** Starts the stopwatch */
  startStopwatch() {
    // Set start time based on whether it's stopped or resetted
    this.setStartTime();

     // Every second
    this.elapsedTimeIntervalRef = setInterval(() => {
      // Compute the elapsed time & display
      this.elapsedTimeText = this.timeAndDateHandlingService.getElapsedTime(this.startTime); //pass the actual record start time

      // Improvement: Can Stop elapsed time and resert when a maximum elapsed time
      //              has been reached.
    }, 1000);

    // Hide the start button, which will be replace by stop
    this.displayStartButton = false;
  }

  /** Sets the start time value */
  private setStartTime() {
    if (this.elapsedTimeWhenPaused) {
      this.startTime = new Date();
      // Subtract the elapsed hours, minutes and seconds from the current date
      // To get correct elapsed time to resume from it
      this.startTime.setHours(this.startTime.getHours() - this.elapsedTimeWhenPaused.hours);
      this.startTime.setMinutes(this.startTime.getMinutes() - this.elapsedTimeWhenPaused.minutes);
      this.startTime.setSeconds(this.startTime.getSeconds() - this.elapsedTimeWhenPaused.seconds);
    } else {
      this.startTime = new Date();
    }
  }

  /** Pauses stopwatch */
  stopStopwatch() {
    // Clear interval
    if (typeof this.elapsedTimeIntervalRef !== "undefined") {
      clearInterval(this.elapsedTimeIntervalRef);
      this.elapsedTimeIntervalRef = undefined;
    }

    // Store the elapsed time on pause
    this.storeElapsedTimeOnPause();

    // Display Start button
    this.displayStartButton = true;
  }

  /** Stores the elapsed time hours, minutes and seconds details
   * on pause
   */
  private storeElapsedTimeOnPause() {
    // Break down elapsed time from display test
    const brokenDownElapsedTime: string[] = this.elapsedTimeText.split(":");

    // Convert list to numbers
    const brokenDownElapsedTimeAsNumbers: number[] = brokenDownElapsedTime.map(numberAsString => parseInt(numberAsString));

    // Store the hours minutes and seconds from that time
    this.elapsedTimeWhenPaused = {
      hours: brokenDownElapsedTimeAsNumbers.length === 3 ? brokenDownElapsedTimeAsNumbers[0] : 0,
      minutes: brokenDownElapsedTimeAsNumbers.length === 3 ? brokenDownElapsedTimeAsNumbers[1] : brokenDownElapsedTimeAsNumbers[0],
      seconds: brokenDownElapsedTimeAsNumbers.length === 3 ? brokenDownElapsedTimeAsNumbers[2] : brokenDownElapsedTimeAsNumbers[1]
    }
  }

  /** Resets stopwatch */
  resetStopwatch() {
    // Clear interval
    if (typeof this.elapsedTimeIntervalRef !== "undefined") {
      clearInterval(this.elapsedTimeIntervalRef);
      this.elapsedTimeIntervalRef = undefined;
    }

    // Reset elapsed time when paused object
    // this.elapsedTimeWhenPaused = undefined

    // Display Start button
    this.displayStartButton = true;

    // Reset elapsed time text
    this.elapsedTimeText = "00:00";
  }

}