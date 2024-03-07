import { post } from "../../../utils/request";

export const postAddHotelPolicies = async (newData, token, sessionToken) => {
  const response = await post("/admin/v1/hotel-policy", newData, token, {
    headers: {
      jwtToken: sessionToken,
    },
  });
  return response.data;
};
