import { get } from "../../utils/request";

export const getHotelById = async (data) => {
  const response = await get(`/public/v1/hotel/get-condition/id`, {
    params: data,
  });
  return response.data;
};
