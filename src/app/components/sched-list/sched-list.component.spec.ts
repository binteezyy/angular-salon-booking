import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedListComponent } from './sched-list.component';

describe('SchedListComponent', () => {
  let component: SchedListComponent;
  let fixture: ComponentFixture<SchedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
