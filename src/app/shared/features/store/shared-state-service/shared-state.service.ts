import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { allRoomsSummaries, availableRooms, loadBookedByUser as loadBookedByUserAction, resetRoomSummaries as resetRoomSummariesAction, searchRoomByDateAction } from '../actions/shared.actions';
import { SharedState } from '../reducer/shared.reducer';
import { selectBookedByUser, selectRoomSummaries } from '../selectors/shared.selectore';
import { Observable } from 'rxjs';
import { RoomSummaryModel } from '../../../domain/entities/room-summary.model';
import { SearchAvailableRoomByDateModule } from '../../../domain/entities/search-available-room-request.model';
import { BookedByUserDTO } from '../../../domain/entities/booked-by-user.model';

@Injectable({
  providedIn: 'root'
})
export class SharedStateService {

  constructor(private store: Store<SharedState>) { }

  public getAllRoomsSummaries(): Observable<RoomSummaryModel[]>{
    return this.store.select(selectRoomSummaries);
  }

  public selectBookedByUser(): Observable<BookedByUserDTO[]>{
    return this.store.select(selectBookedByUser);
  }
  public dispatchAvailableRoomsAction()
  {
    this.store.dispatch(availableRooms())
  }

  public dispatchLoadAllRoomSummariesAction()
  {
    this.store.dispatch(allRoomsSummaries())
  }

  public dispatchSearchMeetingRoomsByDateAction(date: Date, meetingDuration: number){
    this.store.dispatch(searchRoomByDateAction({date, meetingDuration}))
  }

  public dispatchResetRoomSummariesAction(){
    this.store.dispatch(resetRoomSummariesAction())
  }

  public dispatchLoadBookedByUserAction(){
    this.store.dispatch(loadBookedByUserAction())
  }
}
