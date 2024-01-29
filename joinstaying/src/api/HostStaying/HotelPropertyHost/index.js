import { get } from "../../../utils/request";

export const getHotelPropertyHost = async (token) => {
  console.log(token);
  const response = await get("hotel-type/get-all", {}, token);
  console.log(response);
  const data = await response;
  return data;
};
