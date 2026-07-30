import axios from "axios";

const api = axios.create({
  baseURL: "https://event-management-system-backend-tjsl.onrender.com/api",
  withCredentials: true,
});

export default api;