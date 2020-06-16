import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedItemComponent } from './sched-item.component';

describe('SchedItemComponent', () => {
  let component: SchedItemComponent;
  let fixture: ComponentFixture<SchedItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
