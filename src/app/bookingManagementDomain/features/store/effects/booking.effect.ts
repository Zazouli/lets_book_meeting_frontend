import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as SharedActions from '../../../../shared/features/store/actions/shared.actions'
import { BookingManagementService } from '../../../api/booking-management-service.service';

@Injectable()
export class BookingEffects {
  constructor(
    private actions$: Actions,
    private bookingService: BookingManagementService
  ) {}

  bookRoom$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SharedActions.bookRoom),
      mergeMap(action =>
        this.bookingService.bookRoom(action.bookMeetingRoom).pipe(
          map(bookingConfirmation => SharedActions.bookRoomSuccess()),
          catchError(() => of({ type: '[Shared] Book Room Failed' }))
        )
      )
    )
  );
}