import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EntitySummaryModel } from '../models/entitySummary.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

    private _user: BehaviorSubject<any> = new BehaviorSubject({ id: '', name: '', email: '' });
    public readonly user$: Observable<any> = this._user.asObservable();

  constructor(private httpClient: HttpClient) { }

  fetchAuthenticatedUser(userId: string) {
    return this.httpClient.get(`http://localhost:3000/user/${userId}`);
  }

  setAuthenticatedUser(user: any) {
      this._user.next(user);
  }

  getAuthenticatedUser():any {
    return this._user.getValue();
  }

}
