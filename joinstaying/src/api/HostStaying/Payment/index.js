import { post } from "../../../utils/request";

export const postAddHotelPayment = async (newData, token,sessionToken) => {
  const response = await post("/admin/v1/hotel-payment-method", newData, token, {
    headers: {
      jwtToken: sessionToken
    }
  });
  return response.data;
};
