import React from "react";

import Person from "../../assets/images/test/person.jpg";

import { AiOutlineMenuUnfold } from "react-icons/ai";
import { BsBell } from "react-icons/bs";

const Navbar = ({ toggleSidebar, onSidebarToggle }) => {
  return (
    <>
      <nav className="bg-white border-b-2 border-slate-100 flex justify-evenly sm:justify-between">
        <div className="sm:hidden flex justify-center place-items-center cursor-pointer">
          <AiOutlineMenuUnfold size={25} onClick={onSidebarToggle} />
        </div>
        {/* Search Box */}
        <div className="flex bg-slate-100 rounded-md my-3 sm:ml-7">
          <input
            type="text"
            placeholder="Search"
            className="w-30 sm:w-60 md:w-80 p-2 bg-transparent focus:outline-none"
          />
        </div>
        {/* Profile Details */}
        <div className="flex justify-between p-3 sm:mr-7">
          {/* Bell Icon */}
          <div className="h-6 w-6 mt-2 mr-12 cursor-pointer">
            <BsBell size={25} />
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
