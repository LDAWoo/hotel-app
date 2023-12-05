import axios from "axios";

const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
});

export const get = async (path, options = {}, token) => {
  const headers = token
    ? {
        Authorization: `Bearer ${token}`,
        ...options.headers,
      }
    : options.headers;

  const response = await request.get(path, {
    ...options,
    headers,
  });

  return response.data;
};

export const post = async (path, options = {}, token) => {
  const headers = token
    ? {
        Authorization: `Bearer ${token}`,
        ...options.headers,
      }
    : options.headers;

  const response = await request.post(path, { ...options, headers });
  return response.data;
};

export default request;
