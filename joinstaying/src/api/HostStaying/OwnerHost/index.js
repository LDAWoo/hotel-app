import { put } from "../../../utils/request";

export const putOwnerHotel = async (data, token) => {
  const response = await put(`/admin/v1/hotel-owner`, data, token, {
    headers: {
      jwtToken: token,
    },
  });
  return response;
};
