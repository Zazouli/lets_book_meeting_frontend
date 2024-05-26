import { Actions, createEffect, ofType } from "@ngrx/effects";
import { SharedService } from "../../../api/shared.service";
import { Injectable } from "@angular/core";
import * as SharedActions from '../actions/shared.actions';
import { catchError, map, mergeMap, of } from "rxjs";
import { RoomSummaryModel } from "../../../domain/entities/room-summary.model";

@Injectable()
export class sharedEffects {
  constructor(
    private actions$: Actions,
    private sharedService: SharedService
  ) {}

  bookRoom$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SharedActions.availableRooms),
      mergeMap(action =>
        this.sharedService.GetRoomSummaries().pipe(
          map(rs => SharedActions.availableRoomsSuccess({roomSummaries : rs})),
          catchError(() => of({ type: '[Shared] Book Room Failed' }))
        )
      )
    )
  );
}