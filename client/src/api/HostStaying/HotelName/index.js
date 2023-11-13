import { post } from "../../../utils/request";

export const postAddHotelName = async (newData, token) => {
  try {
    const response = await post("hotel/add-new", newData, token);
    return response;
  } catch (error) {
    throw new Error(`Lỗi khi lấy dữ liệu: ${error.message}`);
  }
};
