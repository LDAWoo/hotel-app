import { post } from "../../../utils/request";

export const postAddHotelName = async (newData, token, sessionToken) => {
  const response = await post("/admin/v1/hotel/session-two", newData, token, {
    headers: {
      jwtToken: sessionToken,
    },
  });
  return response;
};
