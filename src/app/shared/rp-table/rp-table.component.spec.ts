import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RpTableComponent } from './rp-table.component';

describe('RpTableComponent', () => {
  let component: RpTableComponent;
  let fixture: ComponentFixture<RpTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RpTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RpTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
