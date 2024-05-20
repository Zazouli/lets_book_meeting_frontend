import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as RoomActions from "../actions/dashboard.actions"
import { catchError, map, mergeMap, of } from "rxjs";
import { RoomMamangementService } from "../../../api/room-mamangement.service";

@Injectable()
export class RoomEffects{
    loadRooms$ = createEffect(() =>
        this.actions$.pipe(
            ofType(RoomActions.LoadRooms),
            mergeMap(_ =>
                this.roomManagementService.getAllAvailableRooms()
                .pipe(
                    map(rooms => RoomActions.LoadRoomsSuccess({rooms})),
                    catchError(error => of(RoomActions.LoadRoomsFailed({error})))
                )
            )
        )
    );

    /**
     *
     */
    constructor(private actions$: Actions, private roomManagementService: RoomMamangementService) {
    }
}