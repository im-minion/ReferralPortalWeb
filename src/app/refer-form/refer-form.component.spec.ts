import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferFormComponent } from './refer-form.component';

describe('ReferFormComponent', () => {
  let component: ReferFormComponent;
  let fixture: ComponentFixture<ReferFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
