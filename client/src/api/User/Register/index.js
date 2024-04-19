import { post } from "../../../utils/request";

export const postRegister = async (account) => {
  const response = await post(`/public/v1/user/register/${false}`, account);
  return response;
};

export const exitsEmailAddress = async (account) => {
  const response = await post("/public/v1/user", account);
  return response;
};
