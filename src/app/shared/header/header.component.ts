import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { AppUserStoreService } from 'src/app/app.user.store.service';
import { EntitySummaryModel } from 'src/app/models/entitySummary.model';
import { UserModel } from 'src/app/models/user.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user?: UserModel;

  constructor(private loginService: LoginService, private appUserStoreService: AppUserStoreService) {
  }

  ngOnInit(): void {

    this.user = this.appUserStoreService.users.filter((user: UserModel) => user.isActive === true)[0];
    

    
    // this.route.params.subscribe(params => {
    //   this.userId = params['uid'];
    //   console.log('this.userId', this.userId);
    // });

  }

}
