import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { availableRooms } from '../actions/shared.actions';
import { SharedState } from '../reducer/shared.reducer';

@Injectable({
  providedIn: 'root'
})
export class SharedStateService {

  constructor(private store: Store<SharedState>) { }

  public dispatchAvailableRoomsAction()
  {
    this.store.dispatch(availableRooms())
  }
}
