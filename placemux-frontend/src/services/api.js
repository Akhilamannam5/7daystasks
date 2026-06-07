import axios from "axios";

const BASE_URL = "http://localhost:5000";

export const api = {
  register: (data) => axios.post(`${BASE_URL}/register`, data),
  verifyOtp: (data) => axios.post(`${BASE_URL}/verify-otp`, data),
  login: (data) => axios.post(`${BASE_URL}/login`, data),
};