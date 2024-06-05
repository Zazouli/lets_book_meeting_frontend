import { TestBed } from '@angular/core/testing';

import { RoomStateServiceService } from './room-state-service.service';

describe('RoomStateServiceService', () => {
  let service: RoomStateServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoomStateServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
