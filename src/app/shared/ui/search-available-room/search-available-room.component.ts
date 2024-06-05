import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-available-room',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-available-room.component.html',
  styleUrl: './search-available-room.component.scss'
})
export class SearchAvailableRoomComponent {
   public date: Date = new Date();
   public meetingDuration: number = 2;

   @Output() onSearch: EventEmitter<{date: Date, meetingDuration: number}> = new EventEmitter();

   public search(){
    this.onSearch.emit({date: this.date, meetingDuration: this.meetingDuration});
   }
}
