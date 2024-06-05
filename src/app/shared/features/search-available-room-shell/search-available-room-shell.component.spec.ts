import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAvailableRoomShellComponent } from './search-available-room-shell.component';

describe('SearchAvailableRoomShellComponent', () => {
  let component: SearchAvailableRoomShellComponent;
  let fixture: ComponentFixture<SearchAvailableRoomShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchAvailableRoomShellComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchAvailableRoomShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
