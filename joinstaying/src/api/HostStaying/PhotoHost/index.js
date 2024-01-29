import { post } from "../../../utils/request";

export const postAddPhoto = async (newData, token) => {
  const response = await post("hotel-image/add-new", newData, token, { headers: { "Content-Type": "multipart/form-data" } });
  return response;
};
