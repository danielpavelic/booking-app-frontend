import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ENDPOINT_POST_BOOKING, ENDPOINT_GET_BOOKING_BY_USER_ID, ENDPOINT_CANCEL_BOOKING, ENDPOINT_GET_BOOKING_BY_ROOM_ID } from '../app.endpoints';
import { BookingModel } from '../models/booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  httpOptions = { headers: new HttpHeaders({'Content-Type':'application/json'}) }

  constructor(private httpClient: HttpClient) { }

  getBookingByUserId(userId: string): Observable<BookingModel[]> {
    return this.httpClient.get<BookingModel[]>(ENDPOINT_GET_BOOKING_BY_USER_ID(userId), this.httpOptions);
  }

  getBookingByRoomId(roomId: string): Observable<BookingModel> {
    return this.httpClient.get<BookingModel>(ENDPOINT_GET_BOOKING_BY_ROOM_ID(roomId), this.httpOptions);
  }

  postBooking(body: BookingModel): Observable<BookingModel> {    
    return this.httpClient.post<BookingModel>(ENDPOINT_POST_BOOKING, JSON.stringify(body), this.httpOptions);
  }

  cancelBooking(bookingId: string, userId: string): Observable<BookingModel> {
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': userId
      })
    };
    
    return this.httpClient.delete<BookingModel>(ENDPOINT_CANCEL_BOOKING(bookingId), httpOptions);
  }
  
}
