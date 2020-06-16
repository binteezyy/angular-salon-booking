import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../../service/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userLoginForm: FormGroup;
  submitted: Boolean = false;
  constructor(
    private fb: FormBuilder,
    public userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userLoginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  login() {
    this.submitted = true;
    if (this.userLoginForm.invalid) {
      return;
    }
    this.userService.login(this.userLoginForm.value).subscribe(
      (data) => {
        this.userService.updateData(data['token']);

        this.userService
          .getUser(this.userLoginForm.controls['username'].value)
          .subscribe();

        this.router.navigate(['/']);
      },
      (err) => {
        console.log(err);
        this.userService.errors = err['error'];
      }
    );
  }

  get userObj() {
    return JSON.parse(localStorage.getItem('user'));
  }

  logout() {
    this.userService.logout();
  }
}
