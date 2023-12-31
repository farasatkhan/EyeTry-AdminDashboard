import { Fragment } from "react";

import Home from "./pages/Admin/Home";
import UsersPage from "./pages/Admin/UsersPage";
import Support from "./pages/Admin/Support";
import Settings from "./pages/Admin/Settings";
import ErrorPage from "./pages/Admin/ErrorPage";

import AddProducts from "./pages/Admin/Products/AddProducts";
import ViewProducts from "./pages/Admin/Products/ViewProducts";
import ProductsHome from "./pages/Admin/Products/ProductsHome/ProductsHome";

import GiftcardsHome from "./pages/Admin/Giftcards/GiftcardsHome";
import IssueGiftcard from "./pages/Admin/Giftcards/IssueGiftcard/IssueGiftcard";
import ViewGiftcards from "./pages/Admin/Giftcards/ViewGiftcards/ViewGiftcards";

import ViewAllOrders from "./pages/Admin/Orders/ViewAllOrders";
import ViewCustomerOrders from "./pages/Admin/Orders/ViewCustomerOrders";
import ViewParticularCustomerOrder from "./pages/Admin/Orders/ViewParticularCustomerOrder";

import PublishedReviews from "./pages/Admin/Moderation/PublishedReviews";
import PendingReviews from "./pages/Admin/Moderation/PendingReviews";

import CreateBlog from "./pages/Admin/Guides/Blog/CreateBlog";

import CreateFAQ from "./pages/Admin/Guides/FAQ/CreateFAQ";
import ViewFAQ from "./pages/Admin/Guides/FAQ/ViewFAQ";

import Analytics from "./pages/Admin/Analytics";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import RootDashboardLayout from "./layouts/Admin/RootDashboardLayout";
import BlankLayout from "./layouts/Admin/BlankLayout";

import "./index.css";
import AddProductVariants from "./pages/Admin/Products/AddProductVariants/AddProductVariants";
import Login from "./pages/Admin/Login/Login";
import PrivateRoutes from "./utils/PrivateRoutes";

const publicRoutes = (
  <Route>
    <Route path="login" element={<Login />} />
  </Route>
);

const privateRoutes = (
  <Route element={<PrivateRoutes />}>
    <Route path="/" element={<RootDashboardLayout />}>
      <Route index element={<Home />} />
      <Route path="settings" element={<Settings />} />
      <Route path="users" element={<UsersPage />} />
      <Route path="agents" element={<Support />} />
      <Route path="analytics" element={<Analytics />} />
      <Route path="products">
        <Route index element={<ProductsHome />} />
        <Route path="new" element={<AddProducts />} />
        <Route path=":glassesId/" element={<AddProducts />} />
        <Route path=":glassesId/variant" element={<AddProductVariants />} />
        <Route path="view" element={<ViewProducts />} />
      </Route>
      <Route path="giftcards">
        <Route index element={<GiftcardsHome />} />
        <Route path="issue" element={<IssueGiftcard />} />
        <Route path="view" element={<ViewGiftcards />} />
        <Route path=":giftcardId" element={<IssueGiftcard />} />
      </Route>
      <Route path="orders">
        <Route index element={<ViewAllOrders />} />
        <Route path="customer/:customerId" element={<ViewCustomerOrders />} />
        <Route
          path="/orders/order/:orderId/customer/:customerId"
          element={<ViewParticularCustomerOrder />}
        />
      </Route>
      <Route path="moderation">
        <Route index element={<PublishedReviews />} />
        <Route path="pending" element={<PendingReviews />} />
      </Route>
      <Route path="guides">
        <Route path="blogs">
          <Route index element={<CreateBlog />} />
        </Route>
        <Route path="faqs">
          <Route index element={<CreateFAQ />} />
          <Route path="view" element={<ViewFAQ />} />
        </Route>
      </Route>
    </Route>
  </Route>
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Fragment>
      {publicRoutes}
      {privateRoutes}
    </Fragment>
  )
);

const routerTest = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<BlankLayout />}></Route>)
);

export default function App() {
  return (
    <Fragment>
      <RouterProvider router={router} />
    </Fragment>
  );
}
