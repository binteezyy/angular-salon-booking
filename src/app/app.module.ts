import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceListComponent } from './components/service-list/service-list.component';
import { ServiceItemComponent } from './components/service-item/service-item.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/layout/header/header.component';
import { RegisterComponent } from './components/users/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/users/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ServiceListComponent,
    ServiceItemComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
