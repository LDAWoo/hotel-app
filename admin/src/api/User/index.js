import get from "../../utils";
const myHeader = new Headers({
  "Content-Type": "application/json",
  Authorization: "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJsZWR1Y2FuaHZ1MzAwNkBnbWFpbC5jb20iLCJpYXQiOjE2OTUxOTM5OTcsImV4cCI6MTY5NTI4MDM5N30.gUYoc_KJAcdZ1RvBT4gyAAMngepJWyLTT27CCok20sQ",
});

export const getUsers = async () => {
  try {
    const response = await get("auth/get-all", {
      method: "GET",
      mode: "no-cors",
      headers: myHeader,
    });

    console.log(response);
    if (!response.ok) {
      throw new Error(`Lỗi khi lấy dữ liệu1: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Lỗi khi lấy dữ liệu2: ${error}`);
  }
};
