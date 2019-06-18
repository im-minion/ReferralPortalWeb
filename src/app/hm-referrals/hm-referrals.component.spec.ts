import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HmReferralsComponent } from './hm-referrals.component';

describe('HmReferralsComponent', () => {
  let component: HmReferralsComponent;
  let fixture: ComponentFixture<HmReferralsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HmReferralsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HmReferralsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
