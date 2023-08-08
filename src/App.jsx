import { Fragment } from "react";

import Home from "./pages/Admin/Home";
import UsersPage from "./pages/Admin/UsersPage";
import Settings from "./pages/Admin/Settings";
import ErrorPage from "./pages/Admin/ErrorPage";
import AddProducts from "./pages/Admin/Products/AddProducts/AddProducts";
import ViewProducts from "./pages/Admin/Products/ViewProducts/ViewProducts";

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
      <Route path="settings" element={<Settings />} />
      <Route path="users" element={<UsersPage />} />
      <Route path="products">
        <Route index element={<ViewProducts />} />
        <Route index path="new" element={<AddProducts />} />
      </Route>
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
