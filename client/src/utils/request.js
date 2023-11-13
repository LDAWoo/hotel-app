import axios from "axios";

const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
});

export const get = async (path, options = {}, token) => {
  const response = await request.get(path, {
    ...options,
    headers: {
      Authorization: `Bearer ${token}`,
      ...options.headers,
    },
  });
  return response.data;
};

export const post = async (path, data = {}, token) => {
  const response = await request.post(path, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};

export default request;
