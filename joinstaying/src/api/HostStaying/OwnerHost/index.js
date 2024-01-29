import { put } from "../../../utils/request";

export const putOwnerHotel = async (newData, token) => {
  const response = await put("hotel-owner/update", newData, token);
  return response;
};
