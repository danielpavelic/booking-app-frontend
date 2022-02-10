import { RoomModel } from "./room.model";
import { UserModel } from "./user.model";

export interface BookingModel {
    _id: string,
    room: RoomModel,
    start: Date,
    end: Date,
    user: UserModel,
}