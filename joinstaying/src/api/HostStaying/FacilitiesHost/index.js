import { get, post } from "../../../utils/request";

export const getFacilities = async (token) => {
  const response = await get("/admin/v1/service-amenity", {}, token);
  const data = await response.data;
  return data;
};

export const postFacilities = async (newData, token, sessionToken) => {
  const response = await post("/admin/v1/service-amenity-room", newData, token, { headers: { jwtToken: sessionToken } });
  const data = await response.data;
  return data;
};
