import { TestBed } from '@angular/core/testing';

import { DeactiveService } from './deactive.service';

describe('DeactiveService', () => {
  let service: DeactiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeactiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
