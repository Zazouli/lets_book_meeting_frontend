import { createAction, props } from '@ngrx/store';
import { RoomEntity } from '../../../../roomManagementDomain/domain/room.model';
import { CreateBookingRequestModule } from '../../../../bookingManagementDomain/domain/entities/create-booking-request.model';
import { RoomSummaryModel } from '../../../domain/entities/room-summary.model';
import { SearchAvailableRoomByDateModule } from '../../../domain/entities/search-available-room-request.model';
import { BookedByUserDTO } from '../../../domain/entities/booked-by-user.model';

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

export const searchRoomByDateAction = createAction(
  "[Shared] Search Room By Date",
  props<{date: Date, meetingDuration: number}>()
)

export const searchRoomByDateSuccessAction = createAction(
  "[Shared] Search Room By Date Success",
  props<{roomSummaries: RoomSummaryModel[]}>()
)

export const resetRoomSummaries = createAction(
  "[Shared] Reset Room Summaries"
)

export const loadBookedByUser = createAction(
  "[Shared] Load Booked By User"
)

export const loadBookedByUserSuccess = createAction(
  "[Shared] Load Booked By User Success",
  props<{bookedByUser: BookedByUserDTO[]}>()
)

export const deleteBooking = createAction(
  "[Shared] Delete Booking",
  props<{bookingId: string}>()
)