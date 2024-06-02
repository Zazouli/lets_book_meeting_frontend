import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { SharedState } from '../../../../shared/features/store/reducer/shared.reducer';
import { selectCurrentRoomSummary } from '../selectors/book-meeting-room.selector';
import { Observable } from 'rxjs';
import { RoomSummaryModel } from '../../../../shared/domain/entities/room-summary.model';
import { CreateBookingRequestModule } from '../../../domain/entities/create-booking-request.model';
import * as BookAmeetingRoom from "../actions/book-meeting-room.action";

@Injectable({
  providedIn: 'root'
})
export class BookManagementStateService {

  constructor(private store: Store<SharedState>) { }

  public selectCurrentRoomSummary(roomId: string): Observable<RoomSummaryModel | undefined>
  {
    return this.store.select(selectCurrentRoomSummary(roomId))
  }

  public dispatchBookMeetingRoom(bookMeetingRoomRequest: CreateBookingRequestModule)
  {
    this.store.dispatch(BookAmeetingRoom.bookRoom({bookMeetingRoomRequest}));
  }
}
