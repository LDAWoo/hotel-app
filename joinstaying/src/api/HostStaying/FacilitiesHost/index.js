import { get } from "../../../utils/request";

export const getFacilities = async (token) => {
  try {
    const response = await get("service-amenity/get-all", {}, token);
    const data = await response;
    return data;
  } catch (error) {
    console.log("Lỗi khi lấy dữ liệu ", error);
  }
};
