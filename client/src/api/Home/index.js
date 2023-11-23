import { get } from "../../utils/request";

export const getHotelIndex = async () => {
  try {
    const response = await get("hotel/get-index");
    const data = await response;
    console.log(data);
    return data;
  } catch (error) {
    throw new Error(`Lỗi khi lấy dữ liệu: ${error.message}`);
  }
};
