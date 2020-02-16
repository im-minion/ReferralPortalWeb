import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HmJobsFormComponent } from './hm-jobs-form.component';

describe('HmJobsFormComponent', () => {
  let component: HmJobsFormComponent;
  let fixture: ComponentFixture<HmJobsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HmJobsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HmJobsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
