import React from "react";

const GiftcardsHome = () => {
  return (
    <div className="mx-7 my-7">
      <div className="mb-5">
        <span className="text-lg">Gift cards</span>
      </div>
      <div className="flex flex-col justify-between items-center border rounded-md py-44">
        <div>
          <p className="text-center">Start selling gift cards</p>
          <p className="text-center text-sm mt-2">
            Add gift card products to sell or issue gift cards directly to your
            customers.
          </p>
        </div>
        <div className="flex gap-5 pt-8">
          <button className="border px-4 py-1 rounded-lg shadow-sm">
            <span className="text-xs">Issue gift card</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GiftcardsHome;
