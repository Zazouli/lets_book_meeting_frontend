export class BookedByUserDTO {
    /**
     *
     */
    constructor(public bookingId: string, public roomName: string, public startDate: Date, public endDate: Date) {
        
    }
}