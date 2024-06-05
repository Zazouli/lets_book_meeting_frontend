import { Component } from '@angular/core';
import { AddRoomComponent } from '../../ui/add-room/add-room.component';
import { HeaderComponent } from '../../../shared/ui/header/header.component';
import { RoomStateServiceService } from '../store/room-state-service.service';
import { RoomEntity } from '../../domain/room.model';
import { RoomDetailsDTO } from '../../domain/room-details-dto.model';

@Component({
  selector: 'app-add-room-shell',
  standalone: true,
  imports: [AddRoomComponent, HeaderComponent],
  templateUrl: './add-room-shell.component.html',
  styleUrl: './add-room-shell.component.scss'
})
export class AddRoomShellComponent {
  /**
   *
   */
  constructor(private roomStateService: RoomStateServiceService) {
    
  }
  onRoomAdded($event: { roomName: string; roomDescription: string; roomCapacity: number; }) {
    const room = {
      id: '',
      name: $event.roomName,
      capacity: $event.roomCapacity,
      description: $event.roomDescription,
      location: ''
    }as RoomDetailsDTO;
    this.roomStateService.dispatchCreateRoomAction(room);
  }

}
