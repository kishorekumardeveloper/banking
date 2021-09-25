import { TestBed } from '@angular/core/testing';

import { GlobalProfileDetailsService } from './global-profile-details.service';

describe('GlobalProfileDetailsService', () => {
  let service: GlobalProfileDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalProfileDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
