import React, { useState, useEffect } from "react";
import { format } from "date-fns";

import { NavLink } from "react-router-dom";

import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { BiTrash } from "react-icons/bi";

import StatusPill from "../../../../components/ui/Admin/StatusPill";
import Person from "../../../../assets/images/test/person.jpg";

import StarFilled from "../../../../assets/icons/star_filled.svg";
import StarHalfFilled from "../../../../assets/icons/star_halffilled.svg";
import StarUnFilled from "../../../../assets/icons/star_unfilled.svg";

import StarsRating from "../../../../components/ui/Admin/Reviews/StarsRating";

import { deleteReview } from "../../../../services/Reviews/reviews";

const ReviewsTable = ({ data, query, handleDeleteReview }) => {
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
              (reviews) =>
                (reviews.order.order_no &&
                  String(reviews.order.order_no)
                    .toLowerCase()
                    .includes(query.toLowerCase())) ||
                (reviews.user.firstName &&
                  String(reviews.user.firstName)
                    .toLowerCase()
                    .includes(query.toLowerCase())) ||
                (reviews.user.lastName &&
                  String(reviews.user.lastName)
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
    if (status === "Paid") {
      return <StatusPill text="Paid" type="primary" />;
    } else if (status === "Declined") {
      return <StatusPill text="Declined" type="danger" />;
    } else if (status === "Pending") {
      return <StatusPill text="Pending" type="warning" />;
    }
  };

  const handleReviewDate = (date) => {
    const originalDate = new Date(date);
    const customFormat = "MMM dd'th,' yyyy, HH:mm (OOO)";
    const formattedDateTime = format(originalDate, customFormat);

    return formattedDateTime;
  };

  return (
    <>
      {/* relative overflow-x-auto */}
      <div className={`flex-grow relative overflow-x-auto`}>
        <table className="w-full text-left text-sm table-auto">
          <thead className="text-sm bg-slate-100">
            <tr>
              <th
                scope="col"
                className="px-2 py-3 font-normal whitespace-nowrap"
              >
                Order
              </th>
              <th
                scope="col"
                className="px-2 py-3 font-normal whitespace-nowrap"
              >
                User
              </th>
              <th
                scope="col"
                className="px-2 py-3 font-normal whitespace-nowrap"
              >
                Review
              </th>
              <th
                scope="col"
                className="px-2 py-3 font-normal whitespace-nowrap"
              >
                Date
              </th>
              <th
                scope="col"
                className="px-2 py-3 font-normal whitespace-nowrap"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody className="">
            {modifiedData.map((review, index) => {
              return (
                <tr key={index}>
                  <td className="px-2 py-3">
                    <NavLink
                      to={`/orders/order/${review.order._id}/customer/${review.user._id}`}
                    >
                      <div className="flex">
                        <div className="mt-1">
                          <p className="whitespace-nowrap text-blue-500 cursor-pointer">
                            {/* {review.order.order_no} */}#
                            {review.order.order_no}
                          </p>
                        </div>
                      </div>
                    </NavLink>
                  </td>
                  <td className="px-2 py-3 whitespace-nowrap">
                    <NavLink to={`/orders/customer/${review.user._id}`}>
                      <div className="flex items-center cursor-pointer">
                        <div className="h-8 w-8 rounded-full overflow-hidden mr-2 shrink-0">
                          <img
                            src={Person}
                            alt="Person"
                            className="object-cover h-full w-full"
                          />
                        </div>
                        <div className="mt-1">
                          <p className="whitespace-nowrap">
                            {review.user.firstName + " " + review.user.lastName}
                          </p>
                          <p className="whitespace-nowrap">
                            {review.user.email}
                          </p>
                        </div>
                      </div>
                    </NavLink>
                  </td>
                  <td className="px-2 py-3">
                    <div className="flex flex-col gap-1">
                      <div className="flex gap-1">
                        <StarsRating starsRecieved={review.stars} />
                      </div>
                      <div className="font-semibold text-base">
                        {review.user_review_title}
                      </div>
                      <div>{review.user_review_description}</div>
                    </div>
                  </td>
                  <td className="px-2 py-3 whitespace-nowrap">
                    {handleReviewDate(review.date)}
                  </td>
                  <td className="px-2 py-3 whitespace-nowrap">
                    <div
                      onClick={() => handleDeleteReview(review._id)}
                      className="flex justify-center items-center gap-1 cursor-pointer"
                    >
                      <BiTrash size={20} />
                    </div>
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

export default ReviewsTable;
