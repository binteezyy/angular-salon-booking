import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Sched } from '../models/Sched';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SchedService {
  constructor(private http: HttpClient) {}

  private schedUrl = 'http://localhost:8000/api/schedules/';

  getSchedules(): Observable<Sched[]> {
    return this.http.get<Sched[]>(this.schedUrl);
  }

  book(booking): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'JWT ' + localStorage.getItem('token'),
      }),
    };

    return this.http.post<any>(
      this.schedUrl,
      JSON.stringify(booking),
      httpOptions
    );
  }
}
