import { post } from "../../../utils/request";

export const postAddHotelName = async (newData, token) => {
  const response = await post("hotel/add-new", newData, token);
  return response;
};
