import React from "react";
import { NavLink } from "react-router-dom";

import ViewProductsStyles from "./ViewProducts.module.css";

const ViewProducts = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-grow justify-between ml-7 mr-7 mt-7">
        <div className="flex flex-col">
          <div className="flex gap-1">
            <p className="font-light text-slate-500">Products /</p>
            <p className="">Products</p>
          </div>
          <div className="mt-2">
            <p className="text-2xl">Products</p>
          </div>
        </div>
        <div className="flex gap-4">
          <NavLink to="/products/new">
            <div className="flex">
              <button className="w-36 h-10 rounded-md text-white focus:outline-none bg-blue-600">
                <p className="">Add Products</p>
              </button>
            </div>
          </NavLink>
          <div className="flex">
            <button
              className="w-36 h-10 rounded-md text-white focus:outline-none bg-white border"
              onClick={() => changeModalHandle("Add new user", "add")}
            >
              <p className="text-black">Update</p>
            </button>
          </div>
          <div className="flex">
            <button
              className="w-36 h-10 rounded-md text-white focus:outline-none bg-danger-900"
              onClick={() => changeModalHandle("Add new user", "add")}
            >
              <p className="text-white">Delete</p>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${ViewProductsStyles["line-height"]} bg-slate-100 ml-7 mr-7 mt-7`}
      ></div>
    </div>
  );
};

export default ViewProducts;
