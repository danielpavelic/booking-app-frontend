import { Component, OnInit } from '@angular/core';
import { AgendaService, DayService, MonthService, WeekService, WorkWeekService } from '@syncfusion/ej2-angular-schedule';

@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.css'],
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService],
})
export class AvailabilityComponent implements OnInit {

  public data: object [] = [{
    id: 2,
    eventName: 'Meeting',
    startTime: new Date(2022, 1, 30, 10, 1),
    endTime: new Date(2022, 1, 30, 12, 2),
    isAllDay: false
      }];
      public selectedDate: Date = new Date(2022, 1, 30, 10, 1);
      public eventSettings: any = {
    dataSource: this.data,
    fields: {
      id: 'id',
      subject: { name: 'eventName' },
      isAllDay: { name: 'isAllDay' },
      startTime: { name: 'startTime' },
      endTime: { name: 'endTime' },
    }
      };


  constructor() { }

  ngOnInit(): void {
  }

}
