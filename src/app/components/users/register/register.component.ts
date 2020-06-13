import { Component, OnInit, Input } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { UserService } from '../../../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  // userRegisterForm = new FormGroup({
  //   username: new FormControl(''),
  //   password: new FormControl(''),
  // });

  userRegisterForm: FormGroup;
  submitted: Boolean = false;
  loading: Boolean = false;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userRegisterForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.userRegisterForm.invalid) {
      return;
    }

    this.loading = true;
    this.userService.addUser(this.userRegisterForm.value).subscribe(
      (data) => {
        console.log('success');
        this.router.navigate(['/']);
      },
      (error) => {
        console.log('error');
        this.loading = false;
      }
    );
  }

  // get username() {
  //   return this.userRegisterForm.get('username');
  // }

  // get password() {
  //   return this.userRegisterForm.get('password');
  // }

  get f() {
    return this.userRegisterForm.controls;
  }
}
