import { createAction, props } from "@ngrx/store";
import { CreateBookingRequestModule } from "../../../domain/entities/create-booking-request.model";

export const bookRoom = createAction(
    '[Book Meeting Room Domain] Book Room',
    props<{ bookMeetingRoomRequest: CreateBookingRequestModule}>()
  );
  
  export const bookRoomSuccess = createAction(
      '[Book Meeting Room Domain] Book Room Success',
    );

    export const bookRoomFail = createAction(
        '[Book Meeting Room Domain] Book Room Fail',
        props<{ errorResult: Error}>()
      );