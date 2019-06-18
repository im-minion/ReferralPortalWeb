import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HmReferralsStatusComponent } from './hm-referrals-status.component';

describe('HmReferralsStatusComponent', () => {
  let component: HmReferralsStatusComponent;
  let fixture: ComponentFixture<HmReferralsStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HmReferralsStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HmReferralsStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
