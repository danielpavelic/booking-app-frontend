import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppUserStoreService } from 'src/app/app.user.store.service';
import { Util } from 'src/app/app.utils';
import { UserModel } from 'src/app/models/user.model';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  users$?: Observable<UserModel[]>;

  constructor(public appUserStoreService: AppUserStoreService, private router: Router) { }

  ngOnInit() {
    this.users$ = this.appUserStoreService.users$
  }

  formatCssClass(input: string) {
    return Util.formatCssClass(input);
  }

  onSetActiveUser(userId: string): void {
    this.appUserStoreService.activeUser = userId;
    this.router.navigate(['dashboard']);
  }


}
