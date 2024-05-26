import { TestBed } from '@angular/core/testing';

import { BookingManagementService } from './booking-management-service.service';

describe('BookingManagementServiceService', () => {
  let service: BookingManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookingManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
