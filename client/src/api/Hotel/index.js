export const getHotels = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products/");
    if (!response.ok) {
      throw new Error(`Lỗi khi lấy dữ liệu: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Lỗi khi lấy dữ liệu: ${error.message}`);
  }
};
