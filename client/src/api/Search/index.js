import { get } from "../../utils/request";

export const getHotelByCondition = async ({ data }) => {
  try {
    const response = await get("hotel/get-condition", { params: data });

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
