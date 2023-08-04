import React from "react";
import { useState, useEffect } from "react";

import Navbar from "../../../layouts/Admin/Navbar";
import Sidebar from "../../../layouts/Admin/Sidebar";
import MobileMenu from "../../../layouts/Admin/MobileMenu";

import { BiSearch } from "react-icons/bi";
import { BsDownload, BsFilter } from "react-icons/bs";

import Card from "../../../layouts/Admin/Card";

import UserPageStyles from "./UsersPage.module.css";
import InformationTable from "../../../layouts/Admin/InformationTable/InformationTable";

import data from "../../../data/Admin/informationTableData";

const UsersPage = () => {
  const [toggleSidebar, setToggleSidebar] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const handleToggleSidebar = () => {
    setToggleSidebar((toggleSidebar) => !toggleSidebar);
  };

  const handleSearchQuery = (event) => {
    setSearchQuery(event.target.value);
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
          <div className="flex flex-col">
            <div className="flex flex-grow justify-between ml-7 mr-7 mt-7">
              <div className="flex flex-col">
                <div className="flex gap-1">
                  <p className="font-light text-slate-500">Management /</p>
                  <p className="">Users</p>
                </div>
                <div className="mt-2">
                  <p className="text-2xl">Users</p>
                </div>
              </div>
              <div className="flex">
                <button className="w-36 h-10 rounded-md text-white focus:outline-none bg-blue-600">
                  <p className="">Add User</p>
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
            <div className="border border-slate-100 m-3 rounded-lg">
              <div className="flex justify-between m-3">
                <div className="mt-3">
                  <div className="flex bg-slate-100 rounded-md">
                    <div className="flex justify-center items-center p-3">
                      <BiSearch size={20} />
                    </div>
                    <input
                      type="text"
                      placeholder="Search User"
                      value={searchQuery}
                      onChange={handleSearchQuery}
                      className="w-30 sm:w-60 md:w-80 p-2 bg-transparent focus:outline-none"
                    />
                  </div>
                </div>
                <div className="flex">
                  {/* export */}
                  <div className="flex justify-center items-center gap-3 border border-slate-100 rounded-lg m-3 w-32 h-10">
                    <div className="flex justify-center items-center">
                      <BsDownload size={20} />
                    </div>
                    <p>Export</p>
                  </div>
                  {/* filter */}
                  <div className="flex justify-center items-center gap-3 border border-slate-100 rounded-lg m-3 w-32 h-10">
                    <div className="flex justify-center items-center">
                      <BsFilter size={20} />
                    </div>
                    <p>Filter</p>
                  </div>
                </div>
              </div>
              {/* table */}
              <div className="mx-4">
                <InformationTable data={data} query={searchQuery} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
