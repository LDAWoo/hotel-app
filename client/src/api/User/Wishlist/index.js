import { Delete, get, post } from "../../../utils/request";


export const getHotelFavorite = async (token) => {
    const response = await get(`/member/v1/hotel/favourite`, {},token);
    return response;
};

export const addHotelFavorite = async (id,token) => {
    const response = await post(`/member/v1/hotel-favourite/${id}`, {},token);
    return response;
};

export const deleteHotelFavorite = async (id,token) => {
    const response = await Delete(`/member/v1/hotel-favourite/${id}`, {},token);
    return response;
};