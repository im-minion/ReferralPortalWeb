import { TestBed, async, inject } from '@angular/core/testing';

import { EmployeeGuard } from './employee.guard';

describe('EmployeeGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeeGuard]
    });
  });

  it('should ...', inject([EmployeeGuard], (guard: EmployeeGuard) => {
    expect(guard).toBeTruthy();
  }));
});
