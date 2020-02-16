import { TestBed } from '@angular/core/testing';

import { TableDataService } from './table-data.service';

describe('TableDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TableDataService = TestBed.get(TableDataService);
    expect(service).toBeTruthy();
  });
});
