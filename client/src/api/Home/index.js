import { get } from "../../utils/request";

export const getHotelIndex = async () => {
  try {
    const response = await get("/public/v1/hotel/get-index");
    const data = await response.data;
    return data;
  } catch (error) {
    throw new Error(`Lỗi khi lấy dữ liệu: ${error.message}`);
  }
};
