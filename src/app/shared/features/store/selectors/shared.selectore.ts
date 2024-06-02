import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as SharedActions from '../actions/shared.actions';
import { SharedState } from '../reducer/shared.reducer';

export const selectSharedState = createFeatureSelector<SharedState>('shared');

export const selectRoomDetails = createSelector(
  selectSharedState,
  (state: SharedState) => state.room
);

export const selectRoomSummaries = createSelector(
    selectSharedState,
    (state: SharedState) => state.roomSummaries
  );