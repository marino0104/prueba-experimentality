import { TestBed } from '@angular/core/testing';

import { BannerServiceService } from './banner.service';

describe('BannerServiceService', () => {
  let service: BannerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BannerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
