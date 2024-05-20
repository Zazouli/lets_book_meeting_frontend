import { TestBed } from '@angular/core/testing';

import { RoomMamangementService } from './room-mamangement.service';

describe('RoomMamangementService', () => {
  let service: RoomMamangementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoomMamangementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
