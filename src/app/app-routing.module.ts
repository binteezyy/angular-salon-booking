import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiceListComponent } from './components/service-list/service-list.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { RegisterComponent } from './components/users/register/register.component';
import { LoginComponent } from './components/users/login/login.component';
import { ServiceBookingComponent } from './components/service-booking/service-booking.component';
import { SchedListComponent } from './components/sched-list/sched-list.component';

const routes: Routes = [
  {
    path: 'services',
    component: ServiceListComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'booking',
    component: ServiceBookingComponent,
  },
  {
    path: 'schedules',
    component: SchedListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
