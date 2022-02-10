import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ENDPOINT_GET_ALL_USERS } from '../app.endpoints';
import { AppUserStoreService } from '../app.user.store.service';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  get allUsers$(): Observable<UserModel[]> {
    return this.httpClient.get<UserModel[]>(ENDPOINT_GET_ALL_USERS)
  }
  
}
