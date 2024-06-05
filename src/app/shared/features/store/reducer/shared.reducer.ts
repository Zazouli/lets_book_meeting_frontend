import { createReducer, on } from '@ngrx/store';
import * as SharedActions from '../actions/shared.actions';
import { RoomSummaryModel } from '../../../domain/entities/room-summary.model';
import { state } from '@angular/animations';
import { BookedByUserDTO } from '../../../domain/entities/booked-by-user.model';

export interface SharedState {
  room: any;
  roomSummaries: RoomSummaryModel[]
  bookedByUser: BookedByUserDTO[]
}

export const initialState: SharedState = {
  room: null,
  roomSummaries: [],
  bookedByUser: []
};

export const sharedReducer = createReducer(
  initialState,
  on(SharedActions.loadRoomDetailsSuccess, (state, { room }) => ({ ...state, room: room })),
  on(SharedActions.availableRoomsSuccess, (state, {roomSummaries}) => ({...state, roomSummaries: roomSummaries})),
  on(SharedActions.allRoomsSummariesSuccess, (state, {roomSummaries}) => ({...state, roomSummaries: roomSummaries})),
  on(SharedActions.searchRoomByDateSuccessAction, (state, {roomSummaries}) => ({...state, roomSummaries: roomSummaries})),
  on(SharedActions.resetRoomSummaries, (state) => ({...state, roomSummaries: []})),
  on(SharedActions.loadBookedByUserSuccess, (state, {bookedByUser}) => ({...state, bookedByUser: bookedByUser})),
); 