import React from "react";
import { useState } from "react";

import Navbar from "../../layouts/Admin/Navbar";
import Sidebar from "../../layouts/Admin/Sidebar";
import MobileMenu from "../../layouts/Admin/MobileMenu";

const UsersPage = () => {
  const [toggleSidebar, setToggleSidebar] = useState(true);

  const handleToggleSidebar = () => {
    setToggleSidebar((toggleSidebar) => !toggleSidebar);
    console.log(toggleSidebar);
  };

  return (
    <>
      {toggleSidebar && <MobileMenu onSidebarToggle={handleToggleSidebar} />}
      <div className="flex">
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
          <div className=""></div>
        </div>
      </div>
    </>
  );
};

export default UsersPage;
