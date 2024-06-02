import { createAction, props } from '@ngrx/store';
import { RoomEntity } from '../../../../roomManagementDomain/domain/room.model';
import { CreateBookingRequestModule } from '../../../../bookingManagementDomain/domain/entities/create-booking-request.model';
import { RoomSummaryModel } from '../../../domain/entities/room-summary.model';

export const loadRoomDetails = createAction(
  '[Shared] Load Room Details',
  props<{ roomId: string }>()
);

export const loadRoomDetailsSuccess = createAction(
  '[Shared] Load Room Details Success',
  props<{ room: RoomEntity }>()
);

export const availableRooms = createAction(
    '[Shared] Load Available Rooms'
);

export const availableRoomsSuccess = createAction(
    '[Shared] Load Available Rooms Success',
    props<{roomSummaries: RoomSummaryModel[]}>()
);

export const allRoomsSummaries = createAction(
  '[Shared] Load all Rooms summaries'
);

export const allRoomsSummariesSuccess = createAction(
  '[Shared] Load All Rooms Summaries Success',
  props<{roomSummaries: RoomSummaryModel[]}>()
);