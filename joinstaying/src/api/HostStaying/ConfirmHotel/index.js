import { post } from "../../../utils/request";

export const postConfirmHotel = async (newData, token, sessionToken) => {
  const response = await post("/admin/v1/policy-confirmation", newData, token, { headers: { jwtToken: sessionToken } });
  const data = await response.data;
  return data;
};
