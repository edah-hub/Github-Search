import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): number {
    let today:Date = new Date();
    let todayWitNoTime:any = new Date (today.getFullYear(),today.getMonth(),today.getDate())
    var dateDifference = Math.abs(todayWitNoTime-value)
    const secondsInDay = 86400;
    var dateDifferenceSeconds = dateDifference*0.001;
    var dateCounter = dateDifferenceSeconds/secondsInDay;
    
    if(dateCounter>=1 && value > todayWitNoTime){
      return dateCounter
    } else {
      return 0;
    }
   
  }

}
