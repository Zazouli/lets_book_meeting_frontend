import { createReducer, on } from "@ngrx/store";
import { RoomEntity } from "../../../domain/room.model";
import * as RoomsActions from "../actions/dashboard.actions";

export interface State{
    rooms: RoomEntity[] | null;
    error: any | null;
}

export const initialState : State =
{
    rooms: null,
    error: null,
}

export const roomsReducer = createReducer(
    initialState,
    on(RoomsActions.LoadRoomsSuccess, (state: State, {rooms}) => ({...state, rooms})),
    on(RoomsActions.LoadRoomsFailed, (state: State, {error}) => ({...state, error}))
)