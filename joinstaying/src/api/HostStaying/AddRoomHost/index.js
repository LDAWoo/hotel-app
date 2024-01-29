import { get } from "../../../utils/request";

export const getRoomType = async (token) => {
  const response = await get("room-type/get-all", {}, token);
  const data = await response;
  return data;
};
