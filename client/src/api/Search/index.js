import { get } from "../../utils/request";

export const getHotelByCondition = async (data) => {
  const response = await get("/public/v1/hotel/get-condition", {
    params: data,
  });
  const responseData = await response;
  return responseData;
};
