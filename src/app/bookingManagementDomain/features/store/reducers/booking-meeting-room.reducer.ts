import { createReducer, on } from "@ngrx/store";
import { BookingModel } from "../../../domain/entities/booking.model";
import * as BookAmeetingRoom from "../actions/book-meeting-room.action";

export interface BookingMeetingRoomState {
    booking: BookingModel[] | null;
    bookingInProgress: boolean;
    bookingErrorResult: Error | null;
  }
  
  export const initialState: BookingMeetingRoomState = {
      booking: null,
      bookingInProgress: false,
      bookingErrorResult: null
  };
  
  export const bookMeetingReducer = createReducer(
    initialState,
    on(BookAmeetingRoom.bookRoom, (state) => ({ ...state, bookingInProgress : true})),
    on(BookAmeetingRoom.bookRoomSuccess, (state) => ({...state, bookingInProgress: false})),
    on(BookAmeetingRoom.bookRoomFail, (state, {errorResult}) => ({...state, bookingInProgress: false, bookingErrorResult: errorResult}))
  );