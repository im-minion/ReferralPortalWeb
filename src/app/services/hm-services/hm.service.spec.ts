import { TestBed } from '@angular/core/testing';

import { HmService } from './hm.service';

describe('HmService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HmService = TestBed.get(HmService);
    expect(service).toBeTruthy();
  });
});
