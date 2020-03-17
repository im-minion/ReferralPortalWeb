import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrAllReferralsComponent } from './hr-all-referrals.component';

describe('HrAllReferralsComponent', () => {
  let component: HrAllReferralsComponent;
  let fixture: ComponentFixture<HrAllReferralsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrAllReferralsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrAllReferralsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
