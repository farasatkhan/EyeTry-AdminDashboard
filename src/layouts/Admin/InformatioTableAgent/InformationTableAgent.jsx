import React, { useState, useEffect } from "react";

import DefaultPersonImage from "../../../assets/images/default_img.jfif";
import StatusPill from "../../../components/ui/Admin/StatusPill";
import BanControl from "../../../components/ui/Admin/BanControl";

const InformationTableAgent = ({ data, query, onCloseModal }) => {
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

  useEffect(() => {}, [onCloseModal]);

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
              (user) =>
                (user.email &&
                  user.email.toLowerCase().includes(query.toLowerCase())) ||
                (user.name &&
                  user.name.toLowerCase().includes(query.toLowerCase())) ||
                (user.phone &&
                  user.phone.toLowerCase().includes(query.toLowerCase()))
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
    if (status === "Active") {
      return <StatusPill text="Active" type="primary" />;
    } else if (status === "Banned") {
      return <StatusPill text="Banned" type="danger" />;
    } else if (status === "Unverified") {
      return <StatusPill text="Unverified" type="warning" />;
    }
  };

  const checkBanControl = (status) => {
    if (status === "Banned") {
      return (
        <BanControl text="Lift Ban" type="primary" onClick={onCloseModal} />
      );
    } else {
      return (
        <BanControl text="Ban User" type="danger" onClick={onCloseModal} />
      );
    }
  };

  return (
    <>
      {/* relative overflow-x-auto */}
      <div className={`flex-grow relative w-full overflow-x-auto`}>
        <table className="w-full text-left text-sm table-auto">
          <thead className="text-sm bg-slate-100">
            <tr>
              <th
                scope="col"
                className="px-2 py-3 font-normal whitespace-nowrap"
              >
                Agents
              </th>
              <th
                scope="col"
                className="px-2 py-3 font-normal whitespace-nowrap"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-2 py-3 font-normal whitespace-nowrap"
              >
                Email
              </th>
              <th
                scope="col"
                className="px-2 py-3 font-normal whitespace-nowrap"
              >
                Phone
              </th>
              <th
                scope="col"
                className="px-2 py-3 font-normal whitespace-nowrap"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-2 py-3 font-normal whitespace-nowrap"
              >
                City
              </th>
              <th
                scope="col"
                className="px-2 py-3 font-normal whitespace-nowrap"
              >
                Country
              </th>
              <th
                scope="col"
                className="px-2 py-3 font-normal whitespace-nowrap"
              >
                Ban Agent
              </th>
            </tr>
          </thead>
          <tbody className="">
            {modifiedData.map((agent, index) => {
              return (
                <tr key={index}>
                  <td className="px-2 py-3 whitespace-nowrap">
                    <div className="flex">
                      <div className="h-8 w-8 rounded-full overflow-hidden mr-2 shrink-0">
                        <img
                          src={DefaultPersonImage}
                          alt="Person"
                          className="object-cover h-full w-full"
                        />
                      </div>
                      <div className="mt-1">
                        <p className="">{agent.name}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-2 py-3 whitespace-nowrap">
                    {agent.firstName + " " + agent.lastName}
                  </td>
                  <td className="px-2 py-3 whitespace-nowrap">{agent.email}</td>
                  <td className="px-2 py-3 whitespace-nowrap">{agent.phone}</td>
                  <td className="px-2 py-3 whitespace-nowrap">
                    {checkStatus(agent.status.user_status)}
                  </td>
                  <td className="px-2 py-3 whitespace-nowrap">{agent.city}</td>
                  <td className="px-2 py-3 whitespace-nowrap">
                    {agent.country}
                  </td>
                  <td className="px-2 py-3 whitespace-nowrap">
                    {/* {checkBanControl(agent.status)} */}
                    {agent.status.user_status === "Banned" ? (
                      <BanControl
                        text="Lift Ban"
                        type="primary"
                        onClick={onCloseModal}
                        user_id={agent._id}
                        user_role="agent"
                      />
                    ) : (
                      <BanControl
                        text="Ban Agent"
                        type="danger"
                        onClick={onCloseModal}
                        user_id={agent._id}
                        user_role="agent"
                      />
                    )}
                  </td>
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

export default InformationTableAgent;
