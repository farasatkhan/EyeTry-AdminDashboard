import React from "react";
import { NavLink } from "react-router-dom";

import {
  BsXLg,
  BsPeople,
  BsBox,
  BsShieldCheck,
  BsBasket,
  BsGear,
  BsGift,
} from "react-icons/bs";
import {
  BiLineChart,
  BiHomeAlt2,
  BiMessageDetail,
  BiLogOut,
} from "react-icons/bi";

const MobileMenu = ({ onSidebarToggle }) => {
  const handleLogout = () => {
    removeDataFromLocalStorage("refreshToken");
    removeDataFromLocalStorage("accessToken");
    // setAccessTokenHeader(); // delete the access token from subsequent axios requests
    redirectToLoginPage();
  };

  return (
    <div className="sm:hidden">
      <div className="flex flex-col mb-5">
        <div className="flex justify-between ml-7 mr-7">
          <div className="flex justify-center mt-5 cursor-pointer">
            <p className="text-3xl font-bold">EyeTry</p>
          </div>
          <div className="mt-7 cursor-pointer">
            <BsXLg size={25} onClick={onSidebarToggle} />
          </div>
        </div>
        <div className="flex flex-col mt-10 ml-7 mr-7">
          <NavLink to="/">
            <div
              onClick={onSidebarToggle}
              className="flex justify-start items-center cursor-pointer mt-8"
            >
              <BiHomeAlt2 size={25} />
              <p className={`ml-7 text-lg font-semibold`}>Dashboard</p>
            </div>
          </NavLink>
          <NavLink onClick={onSidebarToggle} to="/users">
            <div className="flex justify-start items-center cursor-pointer mt-8">
              <BsPeople size={25} />
              <p className={`ml-7 text-lg font-semibold`}>User Management</p>
            </div>
          </NavLink>
          <NavLink onClick={onSidebarToggle} to="/products/view">
            <div className="flex justify-start items-center cursor-pointer mt-8">
              <BsBox size={25} />
              <p className={`ml-7 text-lg font-semibold`}>Products</p>
            </div>
          </NavLink>
          <NavLink onClick={onSidebarToggle} to="/giftcards/view">
            <div className="flex justify-start items-center cursor-pointer mt-8">
              <BsGift size={25} />
              <p className={`ml-7 text-lg font-semibold`}>Giftcards</p>
            </div>
          </NavLink>
          <NavLink onClick={onSidebarToggle} to="/orders/">
            <div className="flex justify-start items-center cursor-pointer mt-8">
              <BsBasket size={25} />
              <p className={`ml-7 text-lg font-semibold`}>Orders</p>
            </div>
          </NavLink>
          <NavLink onClick={onSidebarToggle} to="/analytics/">
            <div className="flex justify-start items-center cursor-pointer mt-8">
              <BiLineChart size={25} />
              <p className={`ml-7 text-lg font-semibold`}>Analytics</p>
            </div>
          </NavLink>
          <NavLink to="/moderation/">
            <div
              onClick={onSidebarToggle}
              className="flex justify-start items-center cursor-pointer mt-8"
            >
              <BsShieldCheck size={25} />
              <p className={`ml-7 text-lg font-semibold`}>Moderation</p>
            </div>
          </NavLink>
          <NavLink onClick={onSidebarToggle} to="/guides/faqs">
            <div className="flex justify-start items-center cursor-pointer mt-8">
              <BiMessageDetail size={25} />
              <p className={`ml-7 text-lg font-semibold`}>Guides</p>
            </div>
          </NavLink>
          <NavLink onClick={onSidebarToggle} to="/agents">
            <div className="flex justify-start items-center cursor-pointer mt-8">
              <BsPeople size={25} />
              <p className={`ml-7 text-lg font-semibold`}>Support</p>
            </div>
          </NavLink>
          <NavLink onClick={onSidebarToggle} to="/settings">
            <div className="flex justify-start items-center cursor-pointer mt-8">
              <BsGear size={25} />
              <p className={`ml-7 text-lg font-semibold`}>Settings</p>
            </div>
          </NavLink>
          <div
            onClick={handleLogout}
            className="flex justify-start items-center cursor-pointer mt-8"
          >
            <BiLogOut size={25} />
            <p className={`ml-7 text-lg font-semibold`}>Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
