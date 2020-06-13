import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiceListComponent } from './components/service-list/service-list.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { RegisterComponent } from './components/users/register/register.component';
import { LoginComponent } from './components/users/login/login.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
