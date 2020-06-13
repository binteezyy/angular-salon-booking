import { Injectable } from '@angular/core';
import {
  HttpHeaderResponse,
  HttpHeaders,
  HttpClient,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/User';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  private userUrl: string = 'http://localhost:8000/api/users/';

  addUser(user: User): Observable<User> {
    return this.httpClient.post<User>(this.userUrl, user, httpOptions);
  }

  public displayUserName: string;
  public token: string;
  public token_expires: Date;
  public errors: any[];

  login(user): Observable<any> {
    return this.httpClient.post(
      'http://localhost:8000/api-token-auth/',
      JSON.stringify(user),
      httpOptions
    );
  }

  refreshToken(): Observable<any> {
    return this.httpClient.post(
      'http://localhost:8000/api-token-refresh/',
      JSON.stringify({ token: this.token }),
      httpOptions
    );
  }

  logout() {
    this.token = null;
    this.token_expires = null;
    this.displayUserName = null;
  }

  updateData(token) {
    this.token = token;
    this.errors = [];

    const token_parts = this.token.split(/\./);
    const token_decoded = JSON.parse(window.atob(token_parts[1]));
    this.token_expires = new Date(token_decoded.exp * 100);
    this.displayUserName = token_decoded.username;
  }
}
