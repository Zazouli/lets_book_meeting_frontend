import { createReducer, on } from "@ngrx/store";
import { RoomEntity } from "../../../domain/room.model";
import * as RoomsActions from "../actions/room-management.actions";

export interface RoomState{
    rooms: RoomEntity[] | null;
    error: any | null;
}

export const initialState : RoomState =
{

    rooms: null,
    error: null,
}

export const roomsReducer = createReducer(
    initialState,
    on(RoomsActions.LoadRoomsSuccess, (state: RoomState, {rooms}) => ({...state, rooms})),
    on(RoomsActions.LoadRoomsFailed, (state: RoomState, {error}) => ({...state, error})),
    on(RoomsActions.CreateRoomSuccess, (state: RoomState, {room}) => ({...state, rooms: state.rooms ? [...state.rooms, room] : [room]})),
)