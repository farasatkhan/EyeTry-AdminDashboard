import axios from "axios";
import API_URL from "../config/config";

import { getDataFromLocalStorage } from "../utils/LocalStorage";
import { isAccessTokenExpired, refreshAccessToken } from "../auth/authUtils";

const unauthenticatedAxiosInstance = axios.create({
    baseURL: API_URL
})

const authenticatedAxiosInstance = axios.create({
    baseURL: API_URL
})

authenticatedAxiosInstance.interceptors.request.use(
    async (config) => {

      const accessToken = getDataFromLocalStorage("accessToken");

      config.headers['Authorization'] = `Bearer ${accessToken}`;

      if (isAccessTokenExpired(accessToken)) {
        const refreshToken = getDataFromLocalStorage("refreshToken");
        const newAccessToken = await refreshAccessToken(refreshToken);
        config.headers['Authorization'] = `Bearer ${newAccessToken}`;
      }
  
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
);

export {authenticatedAxiosInstance, unauthenticatedAxiosInstance};