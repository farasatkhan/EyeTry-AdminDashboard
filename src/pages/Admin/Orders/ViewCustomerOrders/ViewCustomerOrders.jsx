import React, { useState } from "react";

import { BiSearch } from "react-icons/bi";
import { BsDownload, BsFilter } from "react-icons/bs";

import OrdersTable from "../../../../layouts/Admin/Orders/OrdersTable";

import data from "../../../../data/Admin/viewAllOrdersData";
import CustomerInformation from "../../../../layouts/Admin/Orders/CustomerInformation/CustomerInformation";

const ViewParticularCustomerOrder = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchQuery = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row flex-grow justify-between ml-7 mr-7 mt-7">
        <div className="flex flex-col mb-5 md:mb-0 w-full">
          <div className="flex gap-1">
            <p className="font-light text-slate-500">Management /</p>
            <p className="">Customer Orders</p>
          </div>
          <div className="mt-2">
            <p className="text-2xl">Customer Orders</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row border rounded-md mx-5 my-5">
        <CustomerInformation />
      </div>
      <div className="border border-slate-100 m-3 rounded-lg">
        <div className="flex justify-between m-3">
          <div className="mt-3">
            <div className="hidden md:flex bg-slate-100 rounded-md">
              <div className="flex justify-center items-center p-3">
                <BiSearch size={20} />
              </div>
              <input
                type="text"
                placeholder="Search Orders"
                value={searchQuery}
                onChange={handleSearchQuery}
                // w-30 sm:w-60 md:w-80
                className="p-2 bg-transparent focus:outline-none"
              />
            </div>
            <div className="md:hidden p-3">
              <BiSearch size={25} />
            </div>
          </div>
          <div className="flex justify-end">
            {/* export */}
            <div className="px-3 flex justify-center items-center gap-3 border border-slate-100 rounded-lg m-3 w-32 h-10">
              <div className="flex justify-center items-center">
                <BsDownload size={20} />
              </div>
              <p>Export</p>
            </div>
            {/* filter */}
            {/* <div className="px-3 flex justify-center items-center gap-3 border border-slate-100 rounded-lg m-3 w-32 h-10">
              <div className="flex justify-center items-center">
                <BsFilter size={20} />
              </div>
              <p>Filter</p>
            </div> */}
          </div>
        </div>
        {/* table */}
        <div className="mx-4">
          <OrdersTable data={data} query={searchQuery} />
        </div>
      </div>
    </div>
  );
};

export default ViewParticularCustomerOrder;
