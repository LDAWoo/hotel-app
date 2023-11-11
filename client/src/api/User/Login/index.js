import { post } from "../../utils/request";

export const postUserLogin = async ({ data }) => {
  try {
    const response = await post("auth/authenticated", { params: data });

    console.log(response);
    if (!response.ok) {
      throw new Error(`Lỗi khi lấy dữ liệu: ${response.statusText}`);
    }
    const responseData = response.data; // Use responseData
    return responseData;
  } catch (error) {
    throw new Error(`Lỗi khi lấy dữ liệu: ${error.message}`);
  }
};
