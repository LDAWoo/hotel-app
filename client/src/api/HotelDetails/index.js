import { post } from "../../utils/request";

export const getHotelById = async (data) => {
  const response = await post(`hotel/get-condition/id`, data);
  return response;
};
