import { Fragment } from "react";

import Home from "./pages/Admin/Home";
import UsersPage from "./pages/Admin/UsersPage";
import Settings from "./pages/Admin/Settings";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import RootDashboardLayout from "./layouts/Admin/RootDashboardLayout";

import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootDashboardLayout />}>
      <Route index element={<Home />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/users" element={<UsersPage />} />
    </Route>
  )
);

export default function App() {
  return (
    <Fragment>
      <RouterProvider router={router} />
    </Fragment>
  );
}
