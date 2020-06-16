import { Component, OnInit, Input } from '@angular/core';
import { SchedService } from 'src/app/service/sched.service';
import { Sched } from 'src/app/models/Sched';

@Component({
  selector: '[app-sched-item]',
  templateUrl: './sched-item.component.html',
  styleUrls: ['./sched-item.component.css'],
})
export class SchedItemComponent implements OnInit {
  @Input() sched: Sched;
  constructor() {}

  ngOnInit(): void {
    // console.log(typeof this.sched.sched_date);
  }
}
