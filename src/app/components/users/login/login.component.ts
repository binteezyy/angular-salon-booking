import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../../service/user.service';
import { Router } from '@angular/router';

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
        console.log('success');
        console.log(data);
        this.userService.updateData(data['token']);
        this.router.navigate(['/']);
      },
      (err) => {
        this.userService.errors = err['error'];
      }
    );
  }

  refreshToken() {
    this.userService.refreshToken().subscribe(
      (data) => {
        this.userService.updateData(data['token']);
      },
      (err) => {
        this.userService.errors = err['error'];
      }
    );
  }

  logout() {
    this.userService.logout();
  }
}
