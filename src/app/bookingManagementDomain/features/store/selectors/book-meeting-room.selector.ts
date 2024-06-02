import { createFeatureSelector, createSelector } from "@ngrx/store";
import { RoomSummaryModel } from "../../../../shared/domain/entities/room-summary.model";
import { selectRoomSummaries } from "../../../../shared/features/store/selectors/shared.selectore";

export const selectCurrentRoomSummary = (roomId: string) => createSelector(
    selectRoomSummaries,
    (roomSummaries: RoomSummaryModel[]) => roomSummaries.find(r => r.roomId === roomId))