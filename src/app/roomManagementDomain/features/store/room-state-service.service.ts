import { Injectable } from '@angular/core';
import { RoomState } from './reducers/room-management.reducers';
import { Store } from '@ngrx/store';
import { RoomEntity } from '../../domain/room.model';
import * as RoomActions from '../store/actions/room-management.actions';
import { RoomDetailsDTO } from '../../domain/room-details-dto.model';

@Injectable({
  providedIn: 'root'
})
export class RoomStateServiceService {

  constructor(private roomStore: Store<RoomState>) { }

  public dispatchCreateRoomAction(room: RoomDetailsDTO)
  {
    this.roomStore.dispatch(RoomActions.CreateRoom({room}))
  }
}
