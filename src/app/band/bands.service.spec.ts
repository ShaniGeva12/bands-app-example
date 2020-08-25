import { TestBed } from '@angular/core/testing';

import { BandsService } from './bands.service';

describe('BandsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BandsService = TestBed.get(BandsService);
    expect(service).toBeTruthy();
  });
});
