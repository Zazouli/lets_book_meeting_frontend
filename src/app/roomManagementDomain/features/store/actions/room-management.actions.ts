import { createAction, props } from "@ngrx/store";
import { RoomEntity } from "../../../domain/room.model";

export const LoadRoom = createAction("[Room Management] Load Room", props<{roomId: string}>());
export const LoadRoomSuccess = createAction("[Room Management] Load Room Success", props<{room: RoomEntity}>());
export const LoadRoomFailed = createAction("[Room Management] Load Room Success", props<{error: any}>());

export const LoadRooms = createAction("[Room Management] Load Rooms", props<{roomIds: string[]}>());
export const LoadRoomsSuccess = createAction("[Room Management] Load Rooms Success", props<{rooms: RoomEntity[]}>());
export const LoadRoomsFailed = createAction("[Room Management] Load Rooms Failed", props<{error: any}>());