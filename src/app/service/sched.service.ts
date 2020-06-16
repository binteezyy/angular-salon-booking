import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
}
