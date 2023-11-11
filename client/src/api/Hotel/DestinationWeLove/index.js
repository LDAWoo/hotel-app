import { get } from "../../../utils/request";

export const getDestinationWeLove = async () => {
  try {
    const response = await get("hotel/get-index");
    const data = await response;
    return data;
  } catch (error) {
    throw new Error(`Lỗi khi lấy dữ liệu: ${error.message}`);
  }
};
