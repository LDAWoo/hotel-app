import { get, post } from "../../../utils/request";

export const getRoomType = async (token) => {
  const response = await get("/admin/v1/room-type", {}, token);
  const data = await response.data;
  return data;
};

export const getRoomName = async (token) => {
  const response = await get("/admin/v1/room-name", {}, token);
  const data = await response.data;
  return data;
};

export const addNewRoom = async (newData, token, sessionToken) => {
  const response = await post("/admin/v1/room", newData, token, {
    headers: {
      jwtToken: sessionToken,
    },
  });
  const data = await response.data;
  return data;
};
