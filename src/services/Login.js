import axios from "axios";
import { API_BASE_URL } from "./Url";

export const loginUser = async (loginData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, loginData);
    return response.data; // => contient le user et le token
  } catch (error) {
    throw error.response?.data || error;
  }
};