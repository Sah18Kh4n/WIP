import { TestBed } from '@angular/core/testing';

import { DateAndTimeHandlingService } from './date-and-time-handling.service';

describe('DateAndTimeHandlingService', () => {
  let service: DateAndTimeHandlingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateAndTimeHandlingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
