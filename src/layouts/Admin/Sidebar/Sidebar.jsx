import React from "react";
import { useState } from "react";

import { TbArrowBarLeft } from "react-icons/tb";
import { TbArrowBarRight } from "react-icons/tb";

import { BsPeople } from "react-icons/bs";
import { BsBox } from "react-icons/bs";
import { BiLineChart } from "react-icons/bi";
import { BiHomeAlt2 } from "react-icons/bi";
import { BsShieldCheck } from "react-icons/bs";
import { BsBasket } from "react-icons/bs";
import { BsGear } from "react-icons/bs";
import { BiMessageDetail } from "react-icons/bi";
import { BiLogOut } from "react-icons/bi";

import Logo from "../../../assets/images/logo_placeholder.png";

const Sidebar = ({ toggleSidebar, onSidebarToggle }) => {
  return (
    <>
      <div
        className={`${
          toggleSidebar ? "w-60" : "sm:w-20"
        } duration-300 bg-white h-full p-5 pt-8 relative border-2 border-slate-100`}
      >
        <div
          onClick={onSidebarToggle}
          className="flex justify-center items-center rounded-full bg-white h-12 w-12 absolute -right-4 top-2 border-2 border-slate-100 cursor-pointer"
        >
          {toggleSidebar ? (
            <TbArrowBarLeft size={20} />
          ) : (
            <TbArrowBarRight size={20} />
          )}
        </div>
        <div className="flex items-center justify-center">
          <img
            src={Logo}
            className={`${
              toggleSidebar ? "block" : "hidden"
            } sm:h-1/2 sm:w-1/2`}
            alt="logo"
          />
        </div>
        <div className="mt-10">
          <div className="flex justify-start items-center cursor-pointer mt-7">
            <div className="h-7 pt-1">
              <BiHomeAlt2 size={20} className="" />
            </div>
            <p
              className={`${
                toggleSidebar ? "" : "hidden"
              } ml-3 text-lg font-semibold`}
            >
              Dashboard
            </p>
          </div>
          <div className="flex justify-start items-center cursor-pointer mt-7">
            <div className="h-7 pt-1">
              <BsPeople size={20} />
            </div>
            <p
              className={`${
                toggleSidebar ? "" : "hidden"
              } ml-3 text-lg font-semibold`}
            >
              Management
            </p>
          </div>
          <div className="flex justify-start items-center cursor-pointer mt-7">
            <div className="h-7 pt-1">
              <BsBox size={20} />
            </div>
            <p
              className={`${
                toggleSidebar ? "" : "hidden"
              } ml-3 text-lg font-semibold`}
            >
              Products
            </p>
          </div>
          <div className="flex justify-start items-center cursor-pointer mt-7">
            <div className="h-7 pt-1">
              <BsBasket size={20} />
            </div>
            <p
              className={`${
                toggleSidebar ? "" : "hidden"
              } ml-3 text-lg font-semibold`}
            >
              Orders
            </p>
          </div>
          <div className="flex justify-start items-center cursor-pointer mt-7">
            <div className="h-7 pt-1">
              <BiLineChart size={20} />
            </div>
            <p
              className={`${
                toggleSidebar ? "" : "hidden"
              } ml-3 text-lg font-semibold`}
            >
              Analytics
            </p>
          </div>
          <div className="flex justify-start items-center cursor-pointer mt-7">
            <div className="h-7 pt-1">
              <BsShieldCheck size={20} />
            </div>
            <p
              className={`${
                toggleSidebar ? "" : "hidden"
              } ml-3 text-lg font-semibold`}
            >
              Moderation
            </p>
          </div>
          <div className="flex justify-start items-center cursor-pointer mt-7">
            <div className="h-7 pt-1">
              <BiMessageDetail size={20} />
            </div>
            <p
              className={`${
                toggleSidebar ? "" : "hidden"
              } ml-3 text-lg font-semibold`}
            >
              Assistance
            </p>
          </div>
          <div className="flex justify-start items-center cursor-pointer mt-7">
            <div className="h-7 pt-1">
              <BsGear size={20} />
            </div>
            <p
              className={`${
                toggleSidebar ? "" : "hidden"
              } ml-3 text-lg font-semibold`}
            >
              Settings
            </p>
          </div>
          <div className="flex justify-start items-center cursor-pointer mt-7">
            <div className="h-7 pt-1">
              <BiLogOut size={20} />
            </div>
            <p
              className={`${
                toggleSidebar ? "" : "hidden"
              } ml-3 text-lg font-semibold`}
            >
              Logout
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
