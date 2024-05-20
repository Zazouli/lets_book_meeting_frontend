import { Locations } from "./locatio.enum";

export interface RoomEntity
{
    roomId: string;
    roomName: string;
    location: Locations;
    capacity: number;
}