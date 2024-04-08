import { get } from "../../../utils/request";

export const getBooking = async (token) => {
    const response = await get(`/member/v1/booking`, {},token);
    return response;
};