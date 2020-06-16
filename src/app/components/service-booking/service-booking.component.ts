import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Service } from 'src/app/models/Service';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-service-booking',
  templateUrl: './service-booking.component.html',
  styleUrls: ['./service-booking.component.css'],
})
export class ServiceBookingComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private serviceService: ServiceService
  ) {}

  public user: User = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))[0]
    : User;
  serviceBookingForm: FormGroup;

  public services: Service[];

  ngOnInit(): void {
    this.serviceBookingForm = this.fb.group({
      userId: ['', [Validators.required]],
      serviceId: ['', [Validators.required]],
      bookingDate: ['', [Validators.required]],
      bookingTime: ['', [Validators.required]],
    });

    this.serviceBookingForm.get('userId').setValue(this.user.id);

    this.serviceService
      .getServices()
      .subscribe((data) => (this.services = data));

    console.log(this.services);
  }

  book() {
    console.log(this.serviceBookingForm.controls['serviceId'].value);
    console.log(this.serviceBookingForm.controls['bookingDate'].value);
    console.log(this.serviceBookingForm.controls['bookingTime'].value);
  }
}
