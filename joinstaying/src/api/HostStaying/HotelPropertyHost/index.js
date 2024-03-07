import { get, post } from "../../../utils/request";

export const getHotelPropertyHost = async (token) => {
  const response = await get("/admin/v1/hotel-type", {}, token);
  const data = await response;
  return data;
};

export const postHotelProperty = async (data, token) => {
  const response = await post(`/admin/v1/hotel/session-one`, data, token, {
    headers: {
      jwtToken: token,
    },
  });
  const dataResponse = await response;
  return dataResponse;
};
