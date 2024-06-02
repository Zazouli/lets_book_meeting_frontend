import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookMeetingRoomShellComponent } from './book-meeting-room-shell.component';

describe('BookMeetingRoomShellComponent', () => {
  let component: BookMeetingRoomShellComponent;
  let fixture: ComponentFixture<BookMeetingRoomShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookMeetingRoomShellComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookMeetingRoomShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
