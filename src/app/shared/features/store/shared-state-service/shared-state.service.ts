import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { allRoomsSummaries, availableRooms } from '../actions/shared.actions';
import { SharedState } from '../reducer/shared.reducer';
import { selectRoomSummaries } from '../selectors/shared.selectore';
import { Observable } from 'rxjs';
import { RoomSummaryModel } from '../../../domain/entities/room-summary.model';

@Injectable({
  providedIn: 'root'
})
export class SharedStateService {

  constructor(private store: Store<SharedState>) { }

  public getAllRoomsSummaries(): Observable<RoomSummaryModel[]>{
    return this.store.select(selectRoomSummaries);
  }
  public dispatchAvailableRoomsAction()
  {
    this.store.dispatch(availableRooms())
  }

  public dispatchLoadAllRoomSummariesAction()
  {
    this.store.dispatch(allRoomsSummaries())
  }
}
