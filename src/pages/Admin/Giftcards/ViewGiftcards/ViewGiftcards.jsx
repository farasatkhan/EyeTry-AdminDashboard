import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

import { BiSearch } from "react-icons/bi";
import { BsDownload, BsFilter } from "react-icons/bs";

import GiftcardTable from "../../../../layouts/Admin/Giftcard/GiftcardTable";
import data from "../../../../data/Admin/giftcardsData";

import {
  deleteGiftcard,
  viewGiftcard,
} from "../../../../services/Giftcards/giftcards";

const ViewGiftcards = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchQuery = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    fetchGiftcards();
  }, []);

  const [giftcards, setGiftcards] = useState([]);

  const fetchGiftcards = async () => {
    try {
      const fetchAllGiftcards = await viewGiftcard();
      setGiftcards(fetchAllGiftcards);
    } catch (error) {
      console.error("Error fetching giftcards", error);
    }
  };

  const handleGiftcardRemoval = async (giftcardId) => {
    try {
      const removeGiftcards = await deleteGiftcard(giftcardId);
      fetchGiftcards();
    } catch (error) {
      console.error("Error removing giftcards", error);
    }
  };

  const handleGiftcardEdit = async () => {
    try {
      const fetchAllGiftcards = await viewGiftcard();
      setGiftcards(fetchAllGiftcards);
    } catch (error) {
      console.error("Error fetching giftcards", error);
    }
  };

  return (
    <div className="mx-7 my-7">
      <div className="flex justify-between mb-5">
        <div>
          <span className="text-lg">Gift cards</span>
        </div>
        <div className="flex gap-5">
          <button className="border px-3 py-0.5 rounded-lg shadow-sm bg-white">
            <span className="text-xs">Export</span>
          </button>
          <NavLink to="/giftcards/issue">
            <button className="border px-3 py-0.5 rounded-lg shadow-sm bg-white">
              <span className="text-xs">Issue gift card</span>
            </button>
          </NavLink>
        </div>
      </div>
      <div className="border shadow-sm rounded-lg bg-white">
        <div className="flex justify-between m-3">
          <div className="mt-3">
            <div className="hidden md:flex bg-slate-100 rounded-md">
              <div className="flex justify-center items-center pl-3">
                <BiSearch size={16} />
              </div>
              <input
                type="text"
                placeholder="Search Products"
                value={searchQuery}
                onChange={handleSearchQuery}
                // w-30 sm:w-60 md:w-80
                className="p-2 bg-transparent focus:outline-none text-sm"
              />
            </div>
            <div className="md:hidden pl-3">
              <BiSearch size={25} />
            </div>
          </div>
          <div className="flex justify-center items-center mr-5">
            {/* filter */}
            {/* <div className="px-3 py-1 flex justify-center items-center gap-3 border shadow-sm rounded-lg">
              <div className="flex justify-center items-center">
                <BsFilter size={16} />
              </div>
              <p className="text-sm">Filter</p>
            </div> */}
          </div>
        </div>
        {/* table */}
        <div className="mx-4">
          <GiftcardTable
            data={giftcards}
            handleGiftcardRemoval={handleGiftcardRemoval}
            query={searchQuery}
          />
        </div>
      </div>
    </div>
  );
};

export default ViewGiftcards;
