import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AppUserStoreService } from 'src/app/app.user.store.service';

import { EntitySummaryModel } from 'src/app/models/entitySummary.model';
import { RoomModel } from 'src/app/models/room.model';
import { UserModel } from 'src/app/models/user.model';
import { BookingModel } from 'src/app/models/booking.model';
import { RoomService } from 'src/app/services/room.service';
import { BookingService } from 'src/app/services/booking.service';

import { Util } from 'src/app/app.utils';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  bookingForm: FormGroup;
  rooms$: Observable<RoomModel[]>;
  user: UserModel = this.appUserStoreService.users.filter((user: UserModel) => user.isActive === true)[0];

  constructor(
    private fb: FormBuilder, 
    private appUserStoreService: AppUserStoreService,
    private roomService: RoomService,
    private bookingService: BookingService,
    private router: Router) { }

  ngOnInit(): void {

    this.rooms$ = this.roomService.allRooms$;

    this.bookingForm = this.fb.group({
      room: [null, [Validators.required, Validators.minLength(10)]],
      start: [null, [Validators.required]],
      end: [null, [Validators.required]],
      user: this.user ? this.onPrepareUserData(this.user) : this.onRedirect(['/']) 
    });
  }

  onFormSubmit(formData: BookingModel) {

    if (!this.user) this.onRedirect(['/']);
    
    this.bookingService.postBooking(formData)
      .subscribe({
        next: () => {
          this.bookingForm.reset();
          this.onRedirect(['dashboard', 'my-booking']);
        },
        error: e => console.error(e.message)
      });
    
   
    //console.log('this.bookingForm', this.bookingForm);
    //console.log('formData', JSON.stringify(formData));
  }

  onPrepareUserData(userData: UserModel) {
    return Util.sanitizeUserDataForTransfer(userData);
  }

  onRedirect(path: string[]) {
    return this.router.navigate(path);
  }

}
