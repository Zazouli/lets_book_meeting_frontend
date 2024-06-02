import { TestBed } from '@angular/core/testing';

import { BookManagementStateService } from './book-management-state.service';

describe('BookManagementStateService', () => {
  let service: BookManagementStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookManagementStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
