import { get, post } from "../../../utils/request";

export const postUserLogin = async (data) => {
  const response = await post("/public/v1/user/login", data);
  return response;
};

export const getUserWithToken = async (token) => {
  const response = await get(`public/v1/user/profile`, {}, token);
  return response;
};
