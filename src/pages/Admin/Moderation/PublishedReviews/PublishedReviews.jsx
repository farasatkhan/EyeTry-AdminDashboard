import React from "react";

import ReviewsInformation from "../../../../layouts/Admin/Moderation/ReviewsInformation";

const PublishedReviews = () => {
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
      <div className="mx-5 my-5">
        <ReviewsInformation />
      </div>
    </div>
  );
};

export default PublishedReviews;
