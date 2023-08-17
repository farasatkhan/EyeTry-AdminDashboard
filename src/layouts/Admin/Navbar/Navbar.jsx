import React from "react";
import NavbarStyles from "./Navbar.module.css";

import Person from "../../../assets/images/test/person.jpg";

import { AiOutlineMenuUnfold } from "react-icons/ai";
import { BsBell } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";

const Navbar = ({ toggleSidebar, onSidebarToggle }) => {
  return (
    <>
      <nav className="bg-white border-b-2 border-slate-100 flex justify-between">
        <div className="md:hidden flex justify-center place-items-center cursor-pointer">
          <AiOutlineMenuUnfold
            size={25}
            onClick={onSidebarToggle}
            className="ml-3 mr-3"
          />
          <BiSearch size={25} className="ml-3  md:hidden" />
        </div>
        {/* Search Box */}
        <div className="hidden md:flex bg-slate-100 rounded-md my-3 md:ml-7">
          <div className="flex justify-center items-center p-3">
            <BiSearch size={20} />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="w-30 sm:w-60 md:w-80 p-2 bg-transparent focus:outline-none"
          />
        </div>
        {/* Profile Details */}
        <div className="flex justify-between p-3 sm:mr-7">
          {/* Bell Icon */}
          <div className="flex h-6 w-6 mt-2 mr-4 sm:mr-12 cursor-pointer relative">
            <BsBell size={25} />
            <div
              className={`${NavbarStyles["bell-icon-dot-color"]} w-2 h-2 rounded-full absolute ml-4`}
            ></div>
          </div>
          <div className="flex cursor-pointer">
            <div className="h-10 w-10 rounded-full overflow-hidden mr-2">
              <img
                src={Person}
                alt="user-profile"
                className="object-cover h-full w-full"
              />
            </div>
            <div className="hidden lg:block">
              <p className="text-sm">Hi, Welcome</p>
              <p className="font-bold text-">Qasim Malik</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
