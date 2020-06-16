import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Service } from 'src/app/models/Service';
import { ServiceService } from 'src/app/service/service.service';
import { SchedService } from 'src/app/service/sched.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-booking',
  templateUrl: './service-booking.component.html',
  styleUrls: ['./service-booking.component.css'],
})
export class ServiceBookingComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private serviceService: ServiceService,
    private schedService: SchedService,
    private router: Router
  ) {}

  public user: User = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))[0]
    : User;
  serviceBookingForm: FormGroup;

  public services: Service[];

  ngOnInit(): void {
    this.serviceBookingForm = this.fb.group({
      user: ['', [Validators.required]],
      service: ['', [Validators.required]],
      sched_date: ['', [Validators.required]],
      sched_time: ['', [Validators.required]],
    });

    this.serviceService
      .getServices()
      .subscribe((data) => (this.services = data));

    console.log(this.services);
  }

  book() {
    let date = this.serviceBookingForm.controls['sched_date'].value;
    let time = this.serviceBookingForm.controls['sched_time'].value;
    let newDate = date.year + '-' + date.month + '-' + date.day;
    let newTime = time.hour + ':' + time.minute + ':' + time.second;
    this.serviceBookingForm.controls['sched_date'].setValue(newDate);
    this.serviceBookingForm.controls['sched_time'].setValue(newTime);

    let newUser: String =
      'http://localhost:8000/api/users/' + this.user.id.toString() + '/';
    this.serviceBookingForm.controls['user'].setValue(newUser);

    let serviceId = this.serviceBookingForm.controls['service'].value;
    let newService: String =
      'http://localhost:8000/api/services/' + serviceId + '/';
    this.serviceBookingForm.controls['service'].setValue(newService);

    console.log(this.serviceBookingForm.value);
    this.schedService.book(this.serviceBookingForm.value).subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(['/']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
