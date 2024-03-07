import { get } from "../../utils/request";

export const getHotelByCondition = async (data) => {
  try {
    const response = await get("/public/v1/hotel/get-condition", {
      headers: { params: data },
    });
    const responseData = response.data;
    return responseData;
  } catch (error) {
    throw new Error(`Lỗi khi lấy dữ liệu: ${error.message}`);
  }
};
