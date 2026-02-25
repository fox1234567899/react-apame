import axios from "axios"

import {jwtDecode} from "jwt-decode"


export const Base_URL= import.meta.env.VITE_BASE_URL || "http://127.0.0.1:8000";

const api =axios.create({
    baseURL:Base_URL,
    withCredentials:true,
})




api.interceptors.request.use(async (config) => {
  let token = localStorage.getItem("access");
  const refresh = localStorage.getItem("refresh");

  if (!token) return config;

  const decoded = jwtDecode(token);
  const current_time = Date.now() / 1000;


  if (decoded.exp < current_time && refresh) {
    try {
      const res = await axios.post("/token/refresh/", { refresh });
      token = res.data.access;
      localStorage.setItem("access", token);
    } catch {
 
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      token = null;
    }
  }

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});


export default api

