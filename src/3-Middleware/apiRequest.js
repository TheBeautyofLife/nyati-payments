import axios from "axios";

const apiRequest = axios.create({
  baseURL: "http://localhost:4500/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

apiRequest.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default apiRequest;
