import {post} from '../../../utils/request'

export const postRegister = async(account) => {
    const response = await post("auth/register-hotel-owner",account);
    return response;
}