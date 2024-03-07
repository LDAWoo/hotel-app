import { post } from "../../../utils/request";

export const postAddPhoto = async (newData, token, sessionToken) => {
  const response = await post("/admin/v1/hotel-image", newData, token, { headers: { "Content-Type": "multipart/form-data", jwtToken: sessionToken } });
  return response;
};
