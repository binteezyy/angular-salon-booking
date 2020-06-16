import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(public userService: UserService) {}

  ngOnInit(): void {}

  logout() {
    this.userService.logout();
  }

  get userObj() {
    return JSON.parse(localStorage.getItem('user'));
  }

  refreshToken() {
    this.userService.refreshToken().subscribe(
      (data) => {
        console.log(data['token']);
        this.userService.updateData(data['token']);
      },
      (err) => {
        this.userService.errors = err['error'];
      }
    );
  }
}
