import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-room',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-room.component.html',
  styleUrl: './add-room.component.scss'
})
export class AddRoomComponent {
  public roomName: string = '';
  public roomDescription: string = '';
  public roomCapacity: number = 0;
  @Output() public roomAdded: EventEmitter<{roomName: string, roomDescription: string, roomCapacity: number}> = new EventEmitter();

  public changeCapacity(increment: number): void {
    if (this.roomCapacity + increment < 0) {
      return;
    }
    this.roomCapacity = this.roomCapacity + increment;
  }

  public saveRoom(): void {
    this.roomAdded.emit({roomName: this.roomName, roomDescription: this.roomDescription, roomCapacity: this.roomCapacity});
  }
}
