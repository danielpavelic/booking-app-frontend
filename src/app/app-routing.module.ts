import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { BookComponent } from './components/book/book.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MybookingComponent } from './components/mybooking/mybooking.component';
import { SingleComponent } from './components/single/single.component';
import { AvailabilityComponent } from './components/availability/availability.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'dashboard', component: DashboardComponent, 
    children: [
      { path: '', redirectTo: 'availability', pathMatch: 'full' },
      { path: 'availability', component: AvailabilityComponent },
      { path: 'my-booking', component: MybookingComponent },
      { path: 'book', component: BookComponent },
      { path: 'availability/room/:id', component: SingleComponent },
    ]
  },
  { path: '**', redirectTo: '/' ,pathMatch: 'full' }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
