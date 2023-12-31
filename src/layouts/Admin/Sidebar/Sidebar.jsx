import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { TbArrowBarLeft } from "react-icons/tb";
import { TbArrowBarRight } from "react-icons/tb";

import { BsPeople } from "react-icons/bs";
import { BsBox, BsGift } from "react-icons/bs";
import { BiLineChart } from "react-icons/bi";
import { BiHomeAlt2 } from "react-icons/bi";
import { BsShieldCheck } from "react-icons/bs";
import { BsBasket } from "react-icons/bs";
import { BsGear } from "react-icons/bs";
import { BiMessageDetail } from "react-icons/bi";
import { BiLogOut } from "react-icons/bi";

import Logo from "../../../assets/images/logo_placeholder.png";

import { removeDataFromLocalStorage } from "../../../utils/LocalStorage";
// import { setAccessTokenHeader } from "../../../auth/authUtils";

const Sidebar = ({ toggleSidebar, onSidebarToggle }) => {
  const navigate = useNavigate();

  const redirectToLoginPage = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    removeDataFromLocalStorage("refreshToken");
    removeDataFromLocalStorage("accessToken");
    // setAccessTokenHeader(); // delete the access token from subsequent axios requests
    redirectToLoginPage();
  };

  return (
    <>
      <div
        className={`${
          toggleSidebar ? "w-60" : "sm:w-20"
        } duration-300 bg-white h-full p-5 pt-8 border-2 border-slate-100 fixed z-10`}
      >
        <div
          onClick={onSidebarToggle}
          className="flex justify-center items-center rounded-full bg-white h-12 w-12 absolute -right-4 top-2 border-2 border-slate-100 cursor-pointer"
        >
          {toggleSidebar ? (
            <TbArrowBarLeft size={18} />
          ) : (
            <TbArrowBarRight size={18} />
          )}
        </div>
        <div className="flex items-center justify-center">
          <img
            src={Logo}
            className={`${
              toggleSidebar ? "block" : "hidden"
            } sm:h-1/4 sm:w-1/4`}
            alt="logo"
          />
        </div>
        <div className="mt-10">
          <NavLink to="/">
            <div className="flex justify-start items-center cursor-pointer mt-5">
              <div className="h-7 pt-1">
                <BiHomeAlt2 size={18} className="" />
              </div>
              <p className={`${toggleSidebar ? "" : "hidden"} ml-3`}>
                Dashboard
              </p>
            </div>
          </NavLink>
          <NavLink to="/users">
            <div className="flex justify-start items-center cursor-pointer mt-5">
              <div className="h-7 pt-1">
                <BsPeople size={18} />
              </div>
              <p className={`${toggleSidebar ? "" : "hidden"} ml-3`}>
                User Management
              </p>
            </div>
          </NavLink>
          <NavLink to="/products/view">
            <div className="flex justify-start items-center cursor-pointer mt-5">
              <div className="h-7 pt-1">
                <BsBox size={18} />
              </div>
              <p className={`${toggleSidebar ? "" : "hidden"} ml-3`}>
                Products
              </p>
            </div>
          </NavLink>
          <NavLink to="/giftcards/view">
            <div className="flex justify-start items-center cursor-pointer mt-5">
              <div className="h-7 pt-1">
                <BsGift size={18} />
              </div>
              <p className={`${toggleSidebar ? "" : "hidden"} ml-3`}>
                Giftcards
              </p>
            </div>
          </NavLink>
          <NavLink to="/orders">
            <div className="flex justify-start items-center cursor-pointer mt-5">
              <div className="h-7 pt-1">
                <BsBasket size={18} />
              </div>
              <p className={`${toggleSidebar ? "" : "hidden"} ml-3`}>Orders</p>
            </div>
          </NavLink>
          {/* <NavLink to="/analytics">
            <div className="flex justify-start items-center cursor-pointer mt-5">
              <div className="h-7 pt-1">
                <BiLineChart size={18} />
              </div>
              <p className={`${toggleSidebar ? "" : "hidden"} ml-3`}>
                Analytics
              </p>
            </div>
          </NavLink> */}
          <NavLink to="/moderation/">
            <div className="flex justify-start items-center cursor-pointer mt-5">
              <div className="h-7 pt-1">
                <BsShieldCheck size={18} />
              </div>
              <p className={`${toggleSidebar ? "" : "hidden"} ml-3`}>
                Moderation
              </p>
            </div>
          </NavLink>
          <NavLink to="/guides/faqs">
            <div className="flex justify-start items-center cursor-pointer mt-5">
              <div className="h-7 pt-1">
                <BiMessageDetail size={18} />
              </div>
              <p className={`${toggleSidebar ? "" : "hidden"} ml-3`}>Guides</p>
            </div>
          </NavLink>
          <NavLink to="/agents">
            <div className="flex justify-start items-center cursor-pointer mt-5">
              <div className="h-7 pt-1">
                <BsPeople size={18} />
              </div>
              <p className={`${toggleSidebar ? "" : "hidden"} ml-3`}>Support</p>
            </div>
          </NavLink>
          <NavLink to="/settings">
            <div className="flex justify-start items-center cursor-pointer mt-5">
              <div className="h-7 pt-1">
                <BsGear size={20} />
              </div>
              <p className={`${toggleSidebar ? "" : "hidden"} ml-3`}>
                Settings
              </p>
            </div>
          </NavLink>
          <div
            onClick={handleLogout}
            className="flex justify-start items-center cursor-pointer mt-5"
          >
            <div className="h-7 pt-1">
              <BiLogOut size={20} />
            </div>
            <p className={`${toggleSidebar ? "" : "hidden"} ml-3`}>Logout</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
