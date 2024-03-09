import { get, post } from "../../utils/request";

export const startBookingSessionOne = async (newData) => {
  const response = await post("/public/v1/booking/session", newData);
  const data = await response.data;
  return data;
};

export const getBookingSessionPending = async (token, newData) => {
  const response = await get(
    `/public/v1/booking/${token}/STATUS_BOOKING_PENDING`,
    newData,
  );
  const data = await response.data;
  return data;
};

export const postBookingSessionInfo = async (token, newData) => {
  const response = await post(`/public/v1/booking/session/info`, newData, "", {
    headers: {
      jwtToken: token,
    },
  });
  const data = await response.data;
  return data;
};
