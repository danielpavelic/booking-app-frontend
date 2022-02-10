import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { concatMap, finalize, mergeMap, switchMap } from 'rxjs';
import { AppUserStoreService } from 'src/app/app.user.store.service';
import { EntitySummaryModel } from 'src/app/models/entitySummary.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userId: string;

  constructor(
    private route: ActivatedRoute,
    private loginService: LoginService,
    private appUserStoreService: AppUserStoreService
    ) {
  }

  ngOnInit(): void {

    console.log('dash user from store', this.appUserStoreService.users);

    // this.route.params.
    //     pipe(
    //       switchMap(routeParams => this.userId = routeParams['uid']),
    //       switchMap(() => this.loginService.fetchAuthenticatedUser(this.userId)),
    //       finalize(() => {})
    //     ).subscribe({
    //       next: (res: any) => this.loginService.setAuthenticatedUser({ id: res._id, email: res.email })
    //     });
   
    
    

  }

  

}
