import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserModel } from './models/user.model';
import { UserService } from './services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AppUserStoreService {

  private readonly _users = new BehaviorSubject<UserModel[]>([]);
  readonly users$ = this._users.asObservable();

  constructor(private userService: UserService) {
    this.fetchAllUsers();
  }

  get users(): UserModel[] {
    return this._users.getValue();
  }

  private set users(val: UserModel[]) {
    this._users.next(val);
  }

  async fetchAllUsers() {
    await this.userService.allUsers$.subscribe((val:UserModel[]) => this.users = val);
  }

  set activeUser(userId: string) {
    this.users.map((user: UserModel) => {
      user._id === userId 
        ? user.isActive = true 
        : user.isActive = false;
    });
  }
}
