import React from "react";
import { useState } from "react";

import Navbar from "../../../layouts/Admin/Navbar";
import Sidebar from "../../../layouts/Admin/Sidebar";
import MobileMenu from "../../../layouts/Admin/MobileMenu";

import Card from "../../../layouts/Admin/Card";

import UserPageStyles from "./UsersPage.module.css";

const UsersPage = () => {
  const [toggleSidebar, setToggleSidebar] = useState(true);

  const handleToggleSidebar = () => {
    setToggleSidebar((toggleSidebar) => !toggleSidebar);
  };

  return (
    <>
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
          <div className="flex flex-col">
            <div className="flex flex-grow justify-between ml-7 mr-7 mt-7">
              <div className="flex flex-col">
                <div className="flex gap-1">
                  <p className="font-light text-slate-500">Management /</p>
                  <p className="font-semibold">Users</p>
                </div>
                <div className="">
                  <p className="font-bold text-xl">Users</p>
                </div>
              </div>
              <div className="flex">
                <button className="w-36 h-10 rounded-md text-white focus:outline-none bg-blue-600">
                  <p className="font-bold">Add User</p>
                </button>
              </div>
            </div>
            <div
              className={`${UserPageStyles["line-height"]} bg-slate-100 ml-7 mr-7 mt-7`}
            ></div>
            <div className="grid grid-cols-1 custom-sm:grid-cols-2 lg:grid-cols-4">
              <Card total={2900} percentage={1.7} change={29.1} />
              <Card total={2900} percentage={1.7} change={29.1} />
              <Card total={2900} percentage={1.7} change={29.1} />
              <Card total={2900} percentage={1.7} change={29.1} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UsersPage;
