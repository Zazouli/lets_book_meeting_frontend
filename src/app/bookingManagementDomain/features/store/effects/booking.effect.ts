import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as BookAmeetingRoom from "../actions/book-meeting-room.action";
import { BookingManagementService } from '../../../api/booking-management-service.service';

@Injectable()
export class BookingEffects {
  constructor(
    private actions$: Actions,
    private bookingService: BookingManagementService
  ) {}

  bookRoom$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookAmeetingRoom.bookRoom),
      mergeMap(action =>
        this.bookingService.bookRoom(action.bookMeetingRoomRequest).pipe(
          map(_ => BookAmeetingRoom.bookRoomSuccess()),
          catchError(async (error) => BookAmeetingRoom.bookRoomFail(error))
        )
      )
    )
  );
}