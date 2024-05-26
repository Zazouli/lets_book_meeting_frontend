import { createReducer, on } from '@ngrx/store';
import * as SharedActions from '../actions/shared.actions';
import { RoomSummaryModel } from '../../../domain/entities/room-summary.model';
import { state } from '@angular/animations';

export interface SharedState {
  room: any;
  roomSummaries: RoomSummaryModel[]
}

export const initialState: SharedState = {
    room: null,
    roomSummaries: []
};

export const sharedReducer = createReducer(
  initialState,
  on(SharedActions.loadRoomDetailsSuccess, (state, { room }) => ({ ...state, room: room })),
  on(SharedActions.availableRoomsSuccess, (state, {roomSummaries}) => ({...state, roomSummaries: roomSummaries}))
); 