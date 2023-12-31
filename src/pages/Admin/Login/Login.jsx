import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { loginAdmin } from "../../../services/Admin/admin";

import { saveDataToLocalStorage } from "../../../utils/LocalStorage";
import { isAccessTokenExpired } from "../../../auth/authUtils";
// import { setAccessTokenHeader } from "../../../auth/authUtils";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const redirectToHomePage = () => {
    navigate("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { email, password };

    try {
      const response = await loginAdmin(data);

      if (response.status === 201) {
        console.log(response.data);
        saveDataToLocalStorage("refreshToken", response.data.refreshToken);
        saveDataToLocalStorage("accessToken", response.data.accessToken);
        saveDataToLocalStorage("adminId", response.data.user._id);
        // setAccessTokenHeader(response.data.accessToken);
        redirectToHomePage();
      } else if (response.status === 400) {
        setError(response.data.message);
      } else {
        setError("Unknown Error Occurred");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Check if a user is already logged in and if so then redirect him to home page.
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) redirectToHomePage();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-1/3">
        <h2 data-cy="login-header" className="text-2xl font-semibold mb-4">
          Login
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border rounded-lg border-gray-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              autoComplete="true"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-600 font-medium"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-2 border rounded-lg border-gray-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Your password"
            />
          </div>
          <button
            data-cy="login-button"
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
          >
            Login
          </button>
        </form>
        {error && (
          <div
            data-cy="login-error"
            className="flex border rounded-md h-10 my-5 bg-red-500"
          >
            <div className="p-2">
              <span className="text-sm text-white">{error}</span>
            </div>
          </div>
        )}
        <div className="flex flex-col justify-center items-center mt-5">
          <p className="text-xs">demo account:</p>
          <div>
            <p className="text-xs">email: admin@eyetry.com</p>
            <p className="text-xs">password: admin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
