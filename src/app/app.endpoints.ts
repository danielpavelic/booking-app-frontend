import { environment } from './../environments/environment';

const BASE_URL = environment.backendBaseUrl;

export const ENDPOINT_GET_ALL_USERS = `${BASE_URL}/user`;
export const ENDPOINT_GET_ALL_ROOMS = `${BASE_URL}/rooms`;
export const ENDPOINT_POST_BOOKING = `${BASE_URL}/booking`;

export function ENDPOINT_GET_BOOKING_BY_USER_ID(userId: string): string { 
    return `${BASE_URL}/mybooking/${userId}`;
};

export function ENDPOINT_GET_BOOKING_BY_ROOM_ID(roomId: string): string { 
    return `${BASE_URL}/booking/room/${roomId}`;
};

export function ENDPOINT_CANCEL_BOOKING(bookingId: string): string { 
    return `${BASE_URL}/mybooking/${bookingId}`;
};

export function ENDPOINT_GET_ROOM_BY_ID(roomId: string): string { 
    return `${BASE_URL}/room/${roomId}`;
};