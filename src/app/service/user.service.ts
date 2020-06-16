import { Injectable } from '@angular/core';
import {
  HttpHeaderResponse,
  HttpHeaders,
  HttpClient,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/User';
import { tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {
    // refresh token every 5mins
    if (localStorage.getItem('token')) {
      setInterval(() => {
        this.refreshToken().subscribe(
          (data) => {
            this.updateData(data['token']);
          },
          (err) => {
            console.log(err);
            // if token expired
            this.logout();
          }
        );
      }, 300000);
    }
  }

  private userUrl: string = 'http://localhost:8000/api/users/';

  addUser(user: User): Observable<User> {
    return this.httpClient.post<User>(this.userUrl, user, httpOptions);
  }

  getUser(username: string): Observable<User> {
    // console.log(`${this.userUrl}?username=${username}`);
    return this.httpClient
      .get<User>(`${this.userUrl}?username=${username}`)
      .pipe(
        tap((data) => {
          localStorage.setItem('user', JSON.stringify(data));
        })
      );
  }

  // public token: string;
  // public token_expires: Date;
  public errors: any[];

  login(user): Observable<any> {
    return this.httpClient.post(
      'http://localhost:8000/api-token-auth/',
      JSON.stringify(user),
      httpOptions
    );
  }

  refreshToken(): Observable<any> {
    console.log(JSON.stringify({ token: localStorage.getItem('token') }));
    // console.log(JSON.stringify({ token: this.token }));
    return this.httpClient.post(
      'http://localhost:8000/api-token-refresh/',
      // JSON.stringify({ token: this.token }),
      JSON.stringify({ token: localStorage.getItem('token') }),
      httpOptions
    );
  }

  logout() {
    // this.token = null;
    // this.token_expires = null;

    localStorage.removeItem('token');
    // localStorage.removeItem('token_decoded');
    localStorage.removeItem('user');
  }

  updateData(token) {
    // this.token = token;
    localStorage.setItem('token', token);
    this.errors = [];

    // const token_parts = this.token.split(/\./);
    // const token_parts = localStorage.getItem('token');
    // const token_decoded = JSON.parse(window.atob(token_parts[1]));
    // this.token_expires = new Date(token_decoded.exp * 100);
  }
}
