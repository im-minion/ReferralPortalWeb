import { TestBed } from '@angular/core/testing';

import { HrService } from './hr.service';

describe('HrService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HrService = TestBed.get(HrService);
    expect(service).toBeTruthy();
  });
});
