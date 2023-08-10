import React from "react";
import { NavLink } from "react-router-dom";

import {
  BsXLg,
  BsPeople,
  BsBox,
  BsShieldCheck,
  BsBasket,
  BsGear,
} from "react-icons/bs";
import {
  BiLineChart,
  BiHomeAlt2,
  BiMessageDetail,
  BiLogOut,
} from "react-icons/bi";

const MobileMenu = ({ onSidebarToggle }) => {
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
            <div className="flex justify-start items-center cursor-pointer mt-8">
              <BiHomeAlt2 size={25} />
              <p className={`ml-7 text-lg font-semibold`}>Dashboard</p>
            </div>
          </NavLink>
          <NavLink to="/users">
            <div className="flex justify-start items-center cursor-pointer mt-8">
              <BsPeople size={25} />
              <p className={`ml-7 text-lg font-semibold`}>Management</p>
            </div>
          </NavLink>
          <NavLink to="/products">
            <div className="flex justify-start items-center cursor-pointer mt-8">
              <BsBox size={25} />
              <p className={`ml-7 text-lg font-semibold`}>Products</p>
            </div>
          </NavLink>
          <NavLink to="/orders/">
            <div className="flex justify-start items-center cursor-pointer mt-8">
              <BsBasket size={25} />
              <p className={`ml-7 text-lg font-semibold`}>Orders</p>
            </div>
          </NavLink>
          <div className="flex justify-start items-center cursor-pointer mt-8">
            <BiLineChart size={25} />
            <p className={`ml-7 text-lg font-semibold`}>Analytics</p>
          </div>
          <NavLink to="/moderation/">
            <div className="flex justify-start items-center cursor-pointer mt-8">
              <BsShieldCheck size={25} />
              <p className={`ml-7 text-lg font-semibold`}>Moderation</p>
            </div>
          </NavLink>
          <div className="flex justify-start items-center cursor-pointer mt-8">
            <BiMessageDetail size={25} />
            <p className={`ml-7 text-lg font-semibold`}>FAQs & Guides</p>
          </div>
          <NavLink to="/settings">
            <div className="flex justify-start items-center cursor-pointer mt-8">
              <BsGear size={25} />
              <p className={`ml-7 text-lg font-semibold`}>Settings</p>
            </div>
          </NavLink>
          <div className="flex justify-start items-center cursor-pointer mt-8">
            <BiLogOut size={25} />
            <p className={`ml-7 text-lg font-semibold`}>Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
