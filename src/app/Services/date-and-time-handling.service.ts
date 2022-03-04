import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateAndTimeHandlingService {

  constructor() { }
  
  getElapsedTime(startTime:Date){

    let endTime = new Date();

    let timeDiffe = endTime.getTime() - startTime.getTime();

    timeDiffe = timeDiffe / 1000;

    let seconds = Math.floor(timeDiffe % 60 );

    let secondsAsString = seconds < 10 ? "0" + seconds : seconds + "" ;

    timeDiffe = Math.floor(timeDiffe / 60);
    
    let minutes = timeDiffe % 60;

    let minutesAsString  = minutes < 10 ? "0" + minutes : minutes + "";

    timeDiffe = Math.floor(timeDiffe / 60 );

    let hours = timeDiffe % 24 ;

    timeDiffe = Math.floor(timeDiffe / 24);

    let days = timeDiffe;
     
    let totalHours = hours  + (days * 24);

    let totalHoursAsString = totalHours < 10 ? "0" + totalHours :totalHours + "";

    if (totalHoursAsString === "00"){
      return minutesAsString + ":"  +  secondsAsString 
    } else{
      return totalHoursAsString + ":" + minutesAsString + ":" + secondsAsString
    }
  }
}
