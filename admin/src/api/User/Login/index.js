import { get, post } from "../../../Utils/request";

export const postUserLogin = async (data) => {
  const response = await post("auth/authenticated", data);
  return response;
};

export const getUserWithToken = async (token) => {
  const response = await get(`auth/find-token?token=${token}`);
  return response;
};
