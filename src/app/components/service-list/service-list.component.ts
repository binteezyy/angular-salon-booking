import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { Service } from '../../models/Service';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css'],
})
export class ServiceListComponent implements OnInit {
  services: Service[];
  constructor(private serviceService: ServiceService) {}

  ngOnInit(): void {
    this.serviceService.getServices().subscribe((ss) => (this.services = ss));
  }
}
