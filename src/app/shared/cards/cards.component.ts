import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BookingModel } from 'src/app/models/booking.model';
import { RoomModel } from 'src/app/models/room.model';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  rooms$: Observable<RoomModel[]> = this.roomService.allRooms$;

  constructor(private roomService: RoomService) { }

  ngOnInit(): void {    
  }

}
