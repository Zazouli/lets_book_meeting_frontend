import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RoomSummaryModel } from '../../../shared/domain/entities/room-summary.model';

@Component({
  selector: 'app-book-meeting-room',
  standalone: true,
  imports: [],
  templateUrl: './book-meeting-room.component.html',
  styleUrl: './book-meeting-room.component.scss'
})
export class BookMeetingRoomComponent {
  @Input() public roomId!: string;
  @Input() roomSummary!: RoomSummaryModel
  @Output() onBookMeetingRoom = new EventEmitter<void>();
  
  public bookMeetingRoom()
  {
    this.onBookMeetingRoom.emit();
  }
}
