import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../../../layouts/Admin/Navbar";
import Sidebar from "../../../layouts/Admin/Sidebar";
import MobileMenu from "../../../layouts/Admin/MobileMenu";

const RootDashboardLayout = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  const handleToggleSidebar = () => {
    setToggleSidebar((toggleSidebar) => !toggleSidebar);
  };

  useEffect(() => {
    setToggleSidebar(window.innerWidth > 640);
  }, []);

  return (
    <div className="font-body">
      {toggleSidebar && <MobileMenu onSidebarToggle={handleToggleSidebar} />}
      <div className={`hidden md:block`}>
        <Sidebar
          toggleSidebar={toggleSidebar}
          onSidebarToggle={handleToggleSidebar}
        />
      </div>
      <div
        className={`${toggleSidebar ? "hidden sm:block md:pl-60" : "md:pl-20"}`}
      >
        <Navbar
          toggleSidebar={toggleSidebar}
          onSidebarToggle={handleToggleSidebar}
        />
        <Outlet />
      </div>
      {/* <div className={`${toggleSidebar ? "hidden" : "block"} sm:flex`}>
        <div className={`hidden sm:block`}>
          <Sidebar
            toggleSidebar={toggleSidebar}
            onSidebarToggle={handleToggleSidebar}
          />
        </div>
        <div className={`flex`}>
          <div className="sm:w-20"></div>
          <div>
            <Navbar
              toggleSidebar={toggleSidebar}
              onSidebarToggle={handleToggleSidebar}
            />
            <Outlet />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default RootDashboardLayout;
