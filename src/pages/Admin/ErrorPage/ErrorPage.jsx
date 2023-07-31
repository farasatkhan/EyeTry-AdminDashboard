import React, { Fragment } from "react";
import Image404 from "../../../assets/images/404.png";

const Navbar = () => {
  return (
    <Fragment>
      <header className="h-14 border-b-2 border-gray-200 font-poppins">
        <nav className="container flex flex-row gap-2 px-40 justify-between">
          <div className="flex py-2">
            <p className="text-2xl font-bold">DevX</p>
            <p className="text-2xl font-extralight">Labs</p>
          </div>
          <ul className="flex py-4 space-x-12">
            <li className="">
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">Pricing</a>
            </li>
            <li>
              <a href="">Support</a>
            </li>
          </ul>
        </nav>
      </header>
      <body>
        <div className="flex px-40 mt-10">
          <div className="px-5 pt-12">
            <p className="text-7xl">Something went wrong.</p>
            <p className="text-3xl mt-5 pt-4">
              We couldn’t find this page. Don’t let this stop you and keep
              browsing.{" "}
            </p>
            <div className="flex flex-1 mt-7 gap-5">
              <div className="border px-4 py-2 rounded-full bg-slate-900 hover:bg-slate-800">
                <p className="text-white">
                  <a href="">Go to home</a>
                </p>
              </div>
              <div className="border px-4 py-2 rounded-full border-slate-900">
                <p className="text-slate-900">
                  <a href="">Previous Page</a>
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <img className="max-w-xl" src={Image404} alt="404 Image" />
          </div>
        </div>
      </body>
    </Fragment>
  );
};

export default Navbar;
