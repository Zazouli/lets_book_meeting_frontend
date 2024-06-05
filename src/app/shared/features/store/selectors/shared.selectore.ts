import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as SharedActions from '../actions/shared.actions';
import { SharedState } from '../reducer/shared.reducer';

export const selectSharedState = createFeatureSelector<SharedState>('sharedState');

export const selectRoomDetails = createSelector(
  selectSharedState,
  (state: SharedState) => state.room
);

export const selectRoomSummaries = createSelector(
    selectSharedState,
    (state: SharedState) => state.roomSummaries
  );

export const selectBookedByUser = createSelector(
  selectSharedState,
  (state: SharedState) => state.bookedByUser
)