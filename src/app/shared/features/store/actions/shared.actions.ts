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

export const bookRoom = createAction(
  '[Shared] Book Room',
  props<{ bookMeetingRoom: CreateBookingRequestModule}>()
);

export const bookRoomSuccess = createAction(
    '[Shared] Book Room Success',
  );

export const availableRooms = createAction(
    '[Shared] Load Available Rooms'
);

export const availableRoomsSuccess = createAction(
    '[Shared] Load Available Rooms Success',
    props<{roomSummaries: RoomSummaryModel[]}>()
);