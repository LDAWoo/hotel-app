import { get, post } from "../../../utils/request";

export const getFacilities = async (token) => {
  const response = await get("service-amenity/get-all", {}, token);
  const data = await response;
  return data;
};

export const postFacilities = async (newData, token) => {
  const response = await post("service-amenity-room/add-new", newData, token, { headers: { "Content-Type": "application/json" } });
  const data = await response;
  return data;
};
