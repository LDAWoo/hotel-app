import axios from "axios";

const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
});

export const get = async (path, option = {}, token) => {
  const headers = token
    ? {
        Authorization: `Bearer ${token}`,
        ...option.headers,
      }
    : option.headers;

  const response = await request.get(path, { ...option, headers });
  return response.data;
};

export const post = async (path, option = {}, token) => {
  const headers = token
    ? {
        Authorization: `Bearer ${token}`,
        ...option.headers,
      }
    : option.headers;

  const response = await request.post(path, { ...option, headers });
  return response.data;
};

export default request;
