import { put } from "../../../utils/request"


export const updateUser = async (user, token) => {
    const response = await put("/member/v1/user", user, token, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })
    return response;
}