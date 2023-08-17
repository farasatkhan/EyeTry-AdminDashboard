import React from "react";
import { useState } from "react";

import { BiSearch } from "react-icons/bi";
import { BsDownload, BsFilter } from "react-icons/bs";

import Card from "../../../layouts/Admin/Card";

import InformationTable from "../../../layouts/Admin/InformationTable/InformationTable";

import ActorModal from "../../../layouts/Admin/ActorModal/ActorModal";

import data from "../../../data/Admin/informationTableData";

const BlankLayout = () => {
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

  return (
    <div className="font-body">
      <div className="flex flex-col">
        <div className="border border-slate-100 m-3 rounded-lg">
          <div className="flex justify-between m-3">
            <div className="mt-3">
              <div className="hidden md:flex bg-slate-100 rounded-md">
                <div className="flex justify-center items-center p-3">
                  <BiSearch size={20} />
                </div>
                <input
                  type="text"
                  placeholder="Search User"
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
          <div className="">
            <InformationTable
              data={data}
              query={searchQuery}
              onCloseModal={changeModalHandle}
            />
          </div>
        </div>
      </div>
      {closeModal && (
        <ActorModal
          title={modalType.title}
          action={modalType.action}
          onChangeModal={changeModalHandle}
        />
      )}
    </div>
  );
};

export default BlankLayout;
