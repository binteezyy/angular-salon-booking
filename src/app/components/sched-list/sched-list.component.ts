import { Component, OnInit } from '@angular/core';
import { SchedService } from 'src/app/service/sched.service';
import { Sched } from 'src/app/models/Sched';

@Component({
  selector: 'app-sched-list',
  templateUrl: './sched-list.component.html',
  styleUrls: ['./sched-list.component.css'],
})
export class SchedListComponent implements OnInit {
  constructor(private schedService: SchedService) {}
  scheds: Sched[];

  ngOnInit(): void {
    this.schedService.getSchedules().subscribe((data) => (this.scheds = data));
  }
}
