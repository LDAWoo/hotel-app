import { get } from "../../utils/request";

export const getHotelById = async (data) => {
  const response = await get(`hotel/get-condition/id`, data);
  return response;
};
