import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myschedule',
  templateUrl: './myschedule.page.html',
  styleUrls: ['./myschedule.page.scss'],
})
export class MyschedulePage implements OnInit {

  eventSource = [{startTime:new Date('Sun Apr 04 2021 10:33:49 GMT+0530 (India Standard Time)'), allDay:false, endTime:new Date('Sun Apr 04 2021 12:15:49 GMT+0530 (India Standard Time)'), title:'suhail'}]
    viewTitle;

    isToday:boolean;
    calendar :any = {
        mode: 'month',
        currentDate: new Date(),
        dateFormatter: {
            formatMonthViewDay: function(date:Date) {
                return date.getDate().toString();
            },
            formatMonthViewDayHeader: function(date:Date) {
                return 'MonMH';
            },
            formatMonthViewTitle: function(date:Date) {
                return 'testMT';
            },

        }
    };

  constructor() { }

  ngOnInit() {
    console.log(new Date())
  }

  today() {
    this.calendar.currentDate = new Date();
}

onTimeSelected(event){
  console.log(event)

}

onViewTitleChanged(event){
  this.viewTitle = event;
}

}
