import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrReferralsComponent } from './hr-referrals.component';

describe('HrReferralsComponent', () => {
  let component: HrReferralsComponent;
  let fixture: ComponentFixture<HrReferralsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrReferralsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrReferralsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
