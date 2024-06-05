import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAvailableRoomComponent } from './search-available-room.component';

describe('SearchAvailableRoomComponent', () => {
  let component: SearchAvailableRoomComponent;
  let fixture: ComponentFixture<SearchAvailableRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchAvailableRoomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchAvailableRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
