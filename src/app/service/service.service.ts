import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Service } from '../models/Service';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private httpClient: HttpClient) {}

  private serviceUrl: string = 'http://localhost:8000/api/services/';

  getService(): Observable<Service[]> {
    return this.httpClient.get<Service[]>(this.serviceUrl);
  }
}
