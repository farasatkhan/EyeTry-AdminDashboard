import React, { useEffect, useState } from "react";
import { jsonDownloader } from "../../../../utils/JSONDownloader";

import ReviewsInformation from "../../../../layouts/Admin/Moderation/ReviewsInformation";
import ReviewsTable from "../../../../layouts/Admin/Moderation/ReviewsTable";

import { BiSearch } from "react-icons/bi";
import { BsDownload } from "react-icons/bs";

import {
  viewAllReviews,
  deleteReview,
} from "../../../../services/Reviews/reviews";

const PublishedReviews = () => {
  const [reviews, setReviews] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchQuery = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const fetchedReviews = await viewAllReviews();
      setReviews(fetchedReviews);
    } catch (error) {
      console.error("Error fetching reviews", error);
    }
  };

  const handleDeleteReview = async (id) => {
    try {
      await deleteReview(id);
      fetchReviews();
    } catch (error) {
      console.error("Error deleting review", error);
    } finally {
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-grow justify-between ml-7 mr-7 mt-7">
        <div className="flex flex-col">
          <div className="flex gap-1">
            <p className="font-light text-slate-500">Moderation /</p>
            <p className="">Published Reviews</p>
          </div>
          <div className="mt-2">
            <p className="text-2xl">Published Reviews</p>
          </div>
        </div>
      </div>
      <div className="mx-7 mt-5 bg-white">
        <ReviewsInformation reviews={reviews} />
      </div>
      <div className="border shadow-sm mx-7 my-7 rounded-lg bg-white">
        <div className="flex justify-between m-3">
          <div className="mt-3">
            <div className="hidden md:flex bg-slate-100 rounded-md">
              <div className="flex justify-center items-center p-3">
                <BiSearch size={20} />
              </div>
              <input
                id="search_reviews"
                type="text"
                placeholder="Search Reviews"
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
              onClick={() => jsonDownloader(reviews, "reviews.json")}
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
          <ReviewsTable
            data={reviews}
            query={searchQuery}
            handleDeleteReview={handleDeleteReview}
          />
        </div>
      </div>
    </div>
  );
};

export default PublishedReviews;
