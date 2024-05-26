import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as RoomActions from "../actions/room-management.actions"
import { catchError, map, mergeMap, of } from "rxjs";
import { RoomMamangementService } from "../../../api/room-mamangement.service";
import * as SharedActions from "../../../../shared/features/store/actions/shared.actions"

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
    loadRoomDetails$ = createEffect(() =>
        this.actions$.pipe(
          ofType(SharedActions.loadRoomDetails),
          mergeMap(action =>
            this.roomManagementService.getRoomDetails(action.roomId).pipe(
              map(room => SharedActions.loadRoomDetailsSuccess({ room })),
              catchError(() => of({ type: '[Shared] Load Room Details Failed' }))
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