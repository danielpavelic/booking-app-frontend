import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ENDPOINT_GET_BOOKING_BY_USER_ID } from '../../app.endpoints';
import { BookingService } from 'src/app/services/booking.service';
import { AppUserStoreService } from 'src/app/app.user.store.service';
import { UserModel } from 'src/app/models/user.model';
import { Router } from '@angular/router';
import { BookingModel } from 'src/app/models/booking.model';
import { Observable, shareReplay, Subscription } from 'rxjs';

@Component({
  selector: 'app-mybooking',
  templateUrl: './mybooking.component.html',
  styleUrls: ['./mybooking.component.css']
})
export class MybookingComponent implements OnInit {

  mybooking$: Observable<BookingModel[]>;
  user: UserModel = this.appUserStoreService.users.filter((user: UserModel) => user.isActive === true)[0];
  confirmMessage: string = "You're about to cancel this booking. Are you sure?";
  subscription: Subscription;

  constructor(
    private bookingService: BookingService, 
    private appUserStoreService: AppUserStoreService,
    private router: Router) { }

  ngOnInit(): void {

    console.log('this.user._id', this.user);

    if (!this.user) return this.onRedirect(['/']);

    this.mybooking$ = this.bookingService.getBookingByUserId(this.user._id);

  }

  onBookingCancel(bookingId: string): any {

    if (!this.user) return this.onRedirect(['/']);

    if(confirm(this.confirmMessage) && this.user._id) {
      this.subscription = this.bookingService.cancelBooking(bookingId, this.user._id)
        .pipe(
          shareReplay(),
        ).subscribe({
          next: () => this.onRedirect(['dashboard', 'availability']),
          error: error => console.error(error.message)
        })
        
    }


  }

  onRedirect(path: string[]): any {
    return this.router.navigate(path);
  }

  ngOnDestroy() {
    if (this.subscription) return this.subscription.unsubscribe();
  }

}
