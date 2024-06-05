import { Actions, createEffect, ofType } from "@ngrx/effects";
import { SharedService } from "../../../api/shared.service";
import { Injectable } from "@angular/core";
import * as SharedActions from '../actions/shared.actions';
import { catchError, map, mergeMap, of } from "rxjs";

@Injectable()
export class sharedEffects {
  constructor(
    private actions$: Actions,
    private sharedService: SharedService
  ) {}

  availableRooms$ = createEffect(() =>
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

  allRoomsSummaries$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SharedActions.allRoomsSummaries),
      mergeMap(action =>
        this.sharedService.getAllRoomSummaries().pipe(
          map(rs => SharedActions.allRoomsSummariesSuccess({roomSummaries : rs})),
          catchError(err => of({ type: '[Shared] Load all rooms Failed' }))
        )
      )
    )
  );

  searchRoomByDate$ = createEffect(() =>
  this.actions$.pipe(
    ofType(SharedActions.searchRoomByDateAction),
    mergeMap(action =>
      this.sharedService.searchRoomByDate(action.date, action.meetingDuration).pipe(
        map(rs => SharedActions.searchRoomByDateSuccessAction({roomSummaries : rs})),
        catchError(err => of({ type: '[Shared] Load all rooms Failed' }))
      )
    )
  )
  )

  bookedByUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SharedActions.loadBookedByUser),
      mergeMap(action =>
        this.sharedService.bookedByUser().pipe(
          map(bookedByUser => SharedActions.loadBookedByUserSuccess({bookedByUser : bookedByUser})),
          catchError(err => of({ type: '[Shared] Load Booked By User Failed' }))
        )
      )
    )
  )
}