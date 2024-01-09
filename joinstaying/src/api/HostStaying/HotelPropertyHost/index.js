import { get } from "../../../utils/request";

export const getHotelPropertyHost = async (token) => {
  const response = await get("hotel-type/get-all", {}, token);
  const data = await response;
  return data;
};
