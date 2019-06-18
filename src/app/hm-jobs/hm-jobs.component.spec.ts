import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HmJobsComponent } from './hm-jobs.component';

describe('HmJobsComponent', () => {
  let component: HmJobsComponent;
  let fixture: ComponentFixture<HmJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HmJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HmJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
