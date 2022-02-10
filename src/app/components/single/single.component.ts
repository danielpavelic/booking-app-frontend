import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionEventArgs, AgendaService, 
  DayService, 
  EventSettingsModel, 
  MonthService, 
  ScheduleComponent, 
  WeekService, 
  WorkHoursModel, 
  WorkWeekService } from '@syncfusion/ej2-angular-schedule';
import { map, Observable, Subject } from 'rxjs';
import { BookingModel } from 'src/app/models/booking.model';
import { RoomModel } from 'src/app/models/room.model';
import { BookingService } from 'src/app/services/booking.service';
import { RoomService } from 'src/app/services/room.service';

import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';

import { ENDPOINT_GET_BOOKING_BY_ROOM_ID } from '../../app.endpoints';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css'],
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService],
})
export class SingleComponent implements OnInit {

  room$: Observable<RoomModel>;
  roomId: string|null;

  @ViewChild("schedule", { static: false }) scheduleObj: ScheduleComponent;
    
  public eventSettings: EventSettingsModel;
  
  constructor(
    private roomService: RoomService,
    private bookingService: BookingService,
    private route: ActivatedRoute, 
    private router: Router){}


  ngOnInit(): void {
    if (!this.route.snapshot.paramMap.get('id')) return this.onRedirect();

    this.roomId = this.route.snapshot.paramMap.get('id');
    this.room$ = this.roomService.getRoomById$(this.roomId as string);


    let dataManager: DataManager = new DataManager({
      //url: 'https://ej2services.syncfusion.com/production/web-services/api/Schedule',
      url: ENDPOINT_GET_BOOKING_BY_ROOM_ID(this.roomId as string),
      adaptor: new ODataV4Adaptor,
      crossDomain: true
      });

    this.eventSettings  = {
        dataSource: dataManager,
        fields: {
            id: '_id',
            subject: { name: "start" },            
            startTime: { name: 'start' },
            endTime: { name: 'end' }
        }
    };
    
  }

  onRedirect(): void {
    this.router.navigate(['/']);
  }

  onActionComplete(args: ActionEventArgs): void {
    console.log("actionComplete", args.requestType);

    if (args.requestType === 'eventCreated') {
      console.log('eventCreated', args.cancel);
    }

    if (args.requestType === 'eventRemoved') {
      console.log('eventRemoved', args.cancel);
    }

  }
    
}
