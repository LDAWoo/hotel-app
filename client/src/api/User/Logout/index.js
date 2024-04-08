import { get } from "../../../utils/request";

export const getLogout = async (token) => {
    const response = await get(`/member/v1/user/logout`, {},token);
    return response;
};