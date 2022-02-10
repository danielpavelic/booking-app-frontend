import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ENDPOINT_GET_ALL_ROOMS, ENDPOINT_GET_ROOM_BY_ID } from '../app.endpoints';
import { RoomModel } from '../models/room.model';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private httpClient: HttpClient) { }

  get allRooms$(): Observable<RoomModel[]> {
    return this.httpClient.get<RoomModel[]>(ENDPOINT_GET_ALL_ROOMS)
  }

  getRoomById$(roomId: string): Observable<RoomModel> {
    return this.httpClient.get<RoomModel>(ENDPOINT_GET_ROOM_BY_ID(roomId))
  }
  
}
