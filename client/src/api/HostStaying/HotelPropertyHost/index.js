import { get } from "../../../utils/request";

export const getHotelPropertyHost = async (token) => {
  try {
    const response = await get("hotel-type/get-all", {}, token);
    const data = await response;
    return data;
  } catch (error) {
    throw new Error(`Lỗi khi lấy dữ liệu: ${error.message}`);
  }
};
