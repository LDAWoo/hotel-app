import { post } from "../../../utils/request";

export const postUserLogin = async (data) => {
  try {
    const response = await post("auth/authenticated", data);

    console.log(response);

    const responseData = response.data;
    return responseData;
  } catch (error) {
    throw new Error(`Lỗi khi lấy dữ liệu: ${error.message}`);
  }
};
