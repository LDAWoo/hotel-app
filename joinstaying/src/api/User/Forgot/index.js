import { post } from "../../../utils/request";

export const postUserForgot = async (email) => {
  const response = await post(`public/v1/user/forgot-password?email=${email}`);
  return response;
};
