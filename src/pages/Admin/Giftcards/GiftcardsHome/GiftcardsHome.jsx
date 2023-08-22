import React from "react";
import { NavLink } from "react-router-dom";

const GiftcardsHome = () => {
  return (
    <div className="mx-7 my-7">
      <div className="mb-5">
        <span className="text-lg">Gift cards</span>
      </div>
      <div className="flex flex-col justify-between items-center border rounded-md py-44 bg-white">
        <div>
          <p className="text-center">Start selling gift cards</p>
          <p className="text-center text-sm mt-2">
            Add gift card products to sell or issue gift cards directly to your
            customers.
          </p>
        </div>
        <div className="flex gap-5 pt-8">
          <NavLink to="/giftcards/issue">
            <button className="border px-4 py-1 rounded-lg shadow-sm">
              <span className="text-xs">Issue gift card</span>
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default GiftcardsHome;
