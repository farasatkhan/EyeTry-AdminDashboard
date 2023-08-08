import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../../../layouts/Admin/Navbar";
import Sidebar from "../../../layouts/Admin/Sidebar";
import MobileMenu from "../../../layouts/Admin/MobileMenu";

const RootDashboardLayout = () => {
  const [toggleSidebar, setToggleSidebar] = useState(true);

  const handleToggleSidebar = () => {
    setToggleSidebar((toggleSidebar) => !toggleSidebar);
  };

  return (
    <div className="font-body">
      {toggleSidebar && <MobileMenu onSidebarToggle={handleToggleSidebar} />}
      <div className={`${toggleSidebar ? "hidden" : "block"} sm:flex`}>
        <div className={`hidden sm:block`}>
          <Sidebar
            toggleSidebar={toggleSidebar}
            onSidebarToggle={handleToggleSidebar}
          />
        </div>
        <div
          className={`${toggleSidebar ? "hidden sm:block" : "block"} flex-grow`}
        >
          <Navbar
            toggleSidebar={toggleSidebar}
            onSidebarToggle={handleToggleSidebar}
          />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default RootDashboardLayout;
