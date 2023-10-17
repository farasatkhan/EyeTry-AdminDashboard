import React, { useState, useEffect } from "react";

import { NavLink } from "react-router-dom";

import StatusPill from "../../../../components/ui/Admin/StatusPill";
import DefaultPersonImage from "../../../../assets/images/default_img.jfif";

const OrdersTable = ({ data, query }) => {
  const [pages, setPages] = useState({
    currentPage: 1,
    totalPages: 1,
    pageSize: 5,
  });

  /*
    Page:1 0-4
    Page:2 5-9
    Page:3 10-14
    Page:4 15-19
    Page:5 20-24

    Suppose Current Page is 3 so (3 - 1) * 5 = 10 and ((3 - 1) * 5) + 5 = 15 thus 
    elements between 10 and 14 will be displayed on the page.
  */
  const [modifiedData, setModifiedData] = useState(
    data.slice(
      (pages.currentPage - 1) * pages.pageSize,
      (pages.currentPage - 1) * pages.pageSize + pages.pageSize
    )
  );

  useEffect(() => {
    setPages({ ...pages, totalPages: Math.ceil(data.length / pages.pageSize) });
  }, [data]);

  useEffect(() => {
    setModifiedData(
      data.slice(
        (pages.currentPage - 1) * pages.pageSize,
        (pages.currentPage - 1) * pages.pageSize + pages.pageSize
      )
    );
  }, [pages]);

  useEffect(() => {
    !!query
      ? setModifiedData(
          data
            .filter(
              (order) =>
                (order.order_no &&
                  String(order.order_no)
                    .toLowerCase()
                    .includes(query.toLowerCase())) ||
                (order.user.firstName &&
                  order.user.firstName
                    .toLowerCase()
                    .includes(query.toLowerCase())) ||
                (order.user.lastName &&
                  order.user.lastName
                    .toLowerCase()
                    .includes(query.toLowerCase()))
            )
            .slice(0, 10)
          // Max Items to be displayed will be 10.
        )
      : setModifiedData(
          data.slice(
            (pages.currentPage - 1) * pages.pageSize,
            (pages.currentPage - 1) * pages.pageSize + pages.pageSize
          )
        );
  }, [query]);

  const totalPages = (totalPages) => {
    return Array.from({ length: totalPages }, (_, index) => (
      <div
        key={index}
        className="px-2 py-2 cursor-pointer"
        onClick={() => changePage(index + 1)}
      >
        <div
          className={`${
            pages.currentPage === index + 1 && "bg-blue-500"
          } rounded-md w-8 h-8 flex justify-center items-center`}
        >
          <p
            className={`${
              pages.currentPage === index + 1 && "text-white"
            } text-sm`}
          >
            {index + 1}
          </p>
        </div>
      </div>
    ));
  };

  const changePage = (page) => {
    if (page < 1 || page > pages.totalPages) return;

    setPages({ ...pages, currentPage: page });
  };

  const checkStatus = (status) => {
    if (status === "Delivered") {
      return <StatusPill text="Delivered" type="primary" />;
    } else if (status === "Pending") {
      return <StatusPill text="Pending" type="danger" />;
    } else if (status === "In Transit") {
      return <StatusPill text="In Transit" type="warning" />;
    }
  };

  return (
    <>
      {/* relative overflow-x-auto */}
      <div className={`flex-grow relative overflow-x-auto`}>
        <table className="table-auto w-full text-left text-sm">
          <thead className="text-sm bg-slate-100">
            <tr>
              <th scope="col" className="px-2 py-3 font-normal ">
                Order
              </th>
              <th scope="col" className="px-2 py-3 font-normal ">
                User
              </th>
              <th scope="col" className="px-2 py-3 font-normal">
                Date
              </th>
              <th scope="col" className="px-2 py-3 font-normal ">
                Delivery Status
              </th>
              <th scope="col" className="px-2 py-3 font-normal ">
                Payment Status
              </th>
              <th scope="col" className="px-2 py-3 font-normal ">
                Order Amount
              </th>
            </tr>
          </thead>
          <tbody className="">
            {modifiedData.map((order, index) => {
              return (
                <tr key={index}>
                  <td className="px-2 py-3">
                    <NavLink
                      to={`/orders/order/${order._id}/customer/${order.user._id}`}
                    >
                      <div className="flex">
                        <div className="mt-1">
                          <p className=" text-blue-500 cursor-pointer">
                            #{order && order.order_no}
                          </p>
                        </div>
                      </div>
                    </NavLink>
                  </td>
                  <td className="px-2 py-3 ">
                    <NavLink to={`/orders/customer/${order.user._id}`}>
                      <div className="flex cursor-pointer">
                        <div className="h-8 w-8 rounded-full overflow-hidden mr-2 shrink-0">
                          <img
                            src={DefaultPersonImage}
                            alt="Person"
                            className="object-cover h-full w-full"
                          />
                        </div>
                        <div className="mt-1">
                          <p className="">
                            {order.user.firstName + " " + order &&
                              order.user.lastName}
                          </p>
                        </div>
                      </div>
                    </NavLink>
                  </td>
                  <td className="px-2 py-3 ">{order.orderDate}</td>
                  <td className="px-2 py-3 ">
                    {checkStatus(order.deliveryStatus)}
                  </td>
                  <td className="px-2 py-3 ">
                    {order.paymentMethod.paymentType}
                  </td>
                  <td className="px-2 py-3 ">{order.totalPrice}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between my-4">
        <div className="px-2 py-2">
          <p className="text-sm">
            Showing {modifiedData.length} of {data.length}
          </p>
        </div>
        <div className="flex gap-1">
          <div
            className="px-2 py-2 cursor-pointer bg-slate-100 rounded-md"
            onClick={() => changePage(pages.currentPage - 1)}
          >
            <div className="rounded-md w-8 h-8 flex justify-center items-center">
              <p
                className={`${
                  pages.currentPage <= 1 && "text-gray-500"
                } text-sm`}
              >
                Prev
              </p>
            </div>
          </div>
          {totalPages(pages.totalPages)}
          <div
            className="px-2 py-2 cursor-pointer bg-slate-100 rounded-md"
            onClick={() => changePage(pages.currentPage + 1)}
          >
            <div className="rounded-md w-8 h-8 flex justify-center items-center">
              <p
                className={`${
                  pages.currentPage >= pages.totalPages && "text-gray-500"
                } text-sm`}
              >
                Next
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrdersTable;
