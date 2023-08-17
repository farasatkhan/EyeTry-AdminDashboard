import React, { useState } from "react";

import Card from "../../../layouts/Admin/Card";

import Sales from "../../../components/ui/Admin/Graphs/Sales/Sales";
import Traffic from "../../../components/ui/Admin/Graphs/Traffic";
import OrdersTable from "../../../layouts/Admin/Orders/OrdersTable";

import data from "../../../data/Admin/viewAllOrdersData";

import { BiSearch } from "react-icons/bi";
import { BsDownload, BsFilter } from "react-icons/bs";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchQuery = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="flex flex-col mt-5 mb-10">
      {/* <div className="flex flex-grow justify-between mx-7 mt-7">
        <div className="flex flex-col">
          <div className="flex gap-1">
            <p className="font-light text-slate-500">Dashbooard /</p>
            <p className="">Home</p>
          </div>
          <div className="mt-2">
            <p className="text-2xl">Home</p>
          </div>
        </div>
        <div>
          <div className="flex">
            <button className="rounded-md text-white focus:outline-none bg-blue-600 px-3 py-3">
              <span>Download Report</span>
            </button>
          </div>
        </div>
      </div> */}
      <div className="grid grid-cols-1 custom-sm:grid-cols-2 lg:grid-cols-4 mx-7 mt-7 gap-5">
        <Card title="Revenue" total={2900} percentage={1.7} change={29.1} />
        <Card
          title="Transactions"
          total={2900}
          percentage={1.7}
          change={29.1}
        />
        <Card title="Customers" total={2900} percentage={1.7} change={29.1} />
        <Card title="Orders" total={2900} percentage={1.7} change={29.1} />
      </div>
      <div className="flex flex-col lg:flex-row gap-5 mx-7 mt-5">
        <div className="w-full lg:w-9/12 border shadow-sm rounded-lg">
          <div className="px-5 py-5">
            <h1 className="text-xl font-bold">Sales</h1>
            <p>Sales in the past month</p>
          </div>
          <div className="w-full h-0.5 bg-slate-100"></div>
          <div className="mt-10 h-80">
            <Sales />
          </div>
        </div>
        <div className="w-full lg:w-3/12 border shadow-sm rounded-lg mt-5 lg:mt-0">
          <div className="px-5 py-5">
            <h1 className="text-xl font-bold">Traffic</h1>
          </div>
          <div className="w-full h-0.5 bg-slate-100"></div>
          <div className="mt-10 h-80">
            <Traffic />
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-5 mx-7 mt-5">
        <div className="w-full lg:w-12/12 border shadow-sm rounded-lg mt-5 lg:mt-0">
          <div className="px-5 py-5">
            <h1 className="text-xl font-bold">Latest Transactions</h1>
          </div>
          <div className="w-full h-0.5 bg-slate-100"></div>
          <div className="">
            <div className="">
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
                  <div className="px-3 flex justify-center items-center gap-3 border border-slate-100 rounded-lg m-3 w-32 h-10">
                    <div className="flex justify-center items-center">
                      <BsFilter size={20} />
                    </div>
                    <p>Filter</p>
                  </div>
                </div>
              </div>
              {/* table */}
              <div className="mx-4">
                <OrdersTable data={data} query={searchQuery} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
