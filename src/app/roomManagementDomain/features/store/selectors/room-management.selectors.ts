import { createFeatureSelector, createSelector } from "@ngrx/store";
import { RoomState } from "../reducers/room-management.reducers";

export const selectRoomManagementState = createFeatureSelector<RoomState>('roomsState');

export const selectRooms = createSelector(
    selectRoomManagementState,
    (state: RoomState) => state.rooms
)