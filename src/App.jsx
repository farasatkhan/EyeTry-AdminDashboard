import UsersPage from "./pages/Admin/UsersPage";

import "./index.css";
import { Fragment } from "react";

export default function App() {
  return (
    <Fragment>
      <div className="font-body">
        <UsersPage />
      </div>
    </Fragment>
  );
}
