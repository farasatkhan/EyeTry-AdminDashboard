import React from "react";
import { useState, useEffect } from "react";

import { jsonDownloader } from "../../../../utils/JSONDownloader";

import { BiSearch } from "react-icons/bi";
import { BsDownload, BsFilter } from "react-icons/bs";

import Card from "../../../../layouts/Admin/Card";

import ViewAllOrdersStyle from "./ViewAllOrders.module.css";
import OrdersTable from "../../../../layouts/Admin/Orders/OrdersTable";

import {
  viewAllOrders,
  viewOrdersAnalytics,
} from "../../../../services/Orders/orders";

import data from "../../../../data/Admin/viewAllOrdersData";
import {
  generateCardData,
  generateOrdersDashboardData,
} from "../../../../utils/generateCardData";

const ViewAllOrders = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [closeModal, setCloseModal] = useState(false);
  const [modalType, setModalType] = useState({
    title: "",
    action: "",
  });

  const handleSearchQuery = (event) => {
    setSearchQuery(event.target.value);
  };

  const changeModalHandle = (title, action) => {
    setCloseModal(!closeModal);
    setModalType({ ...modalType, title: title, action: action });
  };

  const [orders, setOrders] = useState([]);

  const [ordersAnalytics, setOrderAnalytics] = useState({
    totalOrders: 0,
    pendingOrders: 0,
    deliveredOrders: 0,
  });

  const fetchOrders = async () => {
    try {
      const fetchedOrders = await viewAllOrders();
      const fetchedOrdersAnalytics = await viewOrdersAnalytics();
      setOrders(fetchedOrders);
      setOrderAnalytics(fetchedOrdersAnalytics);
    } catch (error) {
      console.error("Error fetching orders", error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const orderData = generateOrdersDashboardData();

  return (
    <div className="font-body">
      <div className="flex flex-col">
        <div className="flex flex-grow justify-between ml-7 mr-7 mt-7">
          <div className="flex flex-col">
            <div className="flex gap-1">
              <p className="font-light text-slate-500">Management /</p>
              <p className="">Orders</p>
            </div>
            <div className="mt-2">
              <p className="text-2xl">Orders</p>
            </div>
          </div>
        </div>
        <div
          className={`${ViewAllOrdersStyle["line-height"]} bg-slate-100 ml-7 mr-7 mt-7`}
        ></div>
        <div className="grid grid-cols-1 custom-sm:grid-cols-2 lg:grid-cols-4 mx-7 mt-7 gap-5">
          <Card
            title="Total Orders"
            total={ordersAnalytics.totalOrders}
            percentage={1.7}
            change={29.1}
            data={ordersAnalytics.totalOrderChart}
          />
          <Card
            title="Delivered Orders"
            total={ordersAnalytics.deliveredOrders}
            percentage={1.7}
            change={29.1}
            data={ordersAnalytics.deliveredOrdersChart}
          />
          <Card
            title="Pending Orders"
            total={ordersAnalytics.pendingOrders}
            percentage={1.7}
            change={29.1}
            data={ordersAnalytics.pendingOrdersChart}
          />
          <Card
            title="Ready Orders"
            total={ordersAnalytics.readyOrders}
            percentage={1.7}
            change={29.1}
            data={ordersAnalytics.pendingOrdersChart}
          />
        </div>
        <div className="border shadow-sm m-3 rounded-lg mx-7 mt-7 bg-white">
          <div className="flex justify-between m-3">
            <div className="mt-3">
              <div className="hidden md:flex bg-slate-100 rounded-md">
                <div className="flex justify-center items-center p-3">
                  <BiSearch size={20} />
                </div>
                <input
                  id="search_orders"
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
              <div
                onClick={() => jsonDownloader(orders, "all_orders.json")}
                className="cursor-pointer flex justify-center items-center gap-3 px-5 h-10 text-center m-3 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
              >
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
            <OrdersTable data={orders} query={searchQuery} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAllOrders;
