import { get } from "../../../utils/request";

export const getBooking = async (token) => {
    const response = await get(`/member/v1/booking`, {},token);
    return response;
};

export const getBookingDetails = async (id,token) => {
    const response = await get(`/member/v1/booking-detail/${id}?currentPage=1&limitPage=8`, {},token);
    return response;
};