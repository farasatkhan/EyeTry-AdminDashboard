import { Navigate, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { authenticatedAxiosInstance } from "../api/config";
import { getDataFromLocalStorage } from "./LocalStorage";

const PrivateRoutes = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const verifyToken = async () => {
      const accessToken = getDataFromLocalStorage("accessToken");

      if (accessToken) {
        try {
          const response = await authenticatedAxiosInstance.post(
            "/admin/auth/verify_token"
          );

          if (response.status === 200) {
            setIsAuthenticated(true);
            console.log("your token is valid");
          } else {
            setIsAuthenticated(false);
            console.log("your token is not valid");
          }
        } catch (error) {
          setIsAuthenticated(false);
          console.log("your token is not valid");
        }
      } else {
        setIsAuthenticated(false);
      }
    };

    verifyToken();
  }, []);

  if (isAuthenticated === null) {
    return null;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
