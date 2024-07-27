import axios from "axios";

const API_BASE_URL =
  "https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats";

export const getData = async (params) => {
  const queryString = new URLSearchParams(params).toString();
  const response = await axios.get(
    `${API_BASE_URL}${queryString ? `?${queryString}` : ""}`
  );
  return response.data;
};
