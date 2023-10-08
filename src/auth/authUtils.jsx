// import axios from "axios";
import {
  authenticatedAxiosInstance,
  unauthenticatedAxiosInstance,
} from "../api/config";

import { saveDataToLocalStorage } from "../utils/LocalStorage";

import jwt_decode from "jwt-decode";

// function setAccessTokenHeader(accessToken) {
//   if (accessToken) {
//     instance.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
//     console.log(
//       authenticatedAxiosInstance.defaults.headers.common["Authorization"]
//     );
//   } else {
//     console.log("removed common headers");
//     delete authenticatedAxiosInstance.defaults.headers.common["Authorization"];
//   }
// }

const isAccessTokenExpired = (accessToken) => {
  if (!accessToken) return true;
  const decodedToken = jwt_decode(accessToken);
  const currentTime = Date.now() / 1000;
  return decodedToken.exp < currentTime;
};

const refreshAccessToken = async (refreshToken) => {
  try {
    const response = await unauthenticatedAxiosInstance.post(
      "/admin/auth/token/",
      {
        token: refreshToken,
      }
    );

    const newAccessToken = response.data.accessToken;
    // setAccessTokenHeader(newAccessToken);
    saveDataToLocalStorage("accessToken", newAccessToken);

    return newAccessToken;
  } catch (error) {
    console.error("Error refreshing accessToken:", error);
    throw error;
  }
};

// export { setAccessTokenHeader, isAccessTokenExpired, refreshAccessToken };
export { isAccessTokenExpired, refreshAccessToken };
