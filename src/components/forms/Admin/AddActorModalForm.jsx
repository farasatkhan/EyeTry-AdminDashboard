import React from "react";

import { BsFillPersonFill, BsPencil } from "react-icons/bs";

import Person from "../../../assets/images/test/person.jpg";
import ModalButtons from "../../ui/Admin/ModalButtons";

const AddActorModalForm = ({ onChangeModal }) => {
  return (
    <>
      <div className="mt-5">
        <div className="flex justify-center items-center gap-5">
          <div className="flex justify-center items-center relative bg-slate-100 w-24 h-24 rounded-full">
            <BsFillPersonFill size={80} className="text-slate-300" />
            <div className="flex justify-center items-center absolute bg-white w-6 h-6 rounded-full border ml-20 mt-10">
              <BsPencil size={10} />
            </div>
          </div>
          <div>
            <div className="flex justify-end gap-4 mt-4">
              <button className="text-white font-bold px-2 py-1 sm:py-2 sm:px-4 rounded border">
                <p className="text-tertiary-100 text-sm font-light">Delete</p>
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center text-sm mt-5">
          <form action="">
            <div className="flex flex-col md:flex-row mb-3">
              <label
                htmlFor="name"
                className="whitespace-nowrap md:whitespace-normal w-1/5 mt-1 mb-1"
              >
                Full Name
              </label>
              <div className="flex justify-between md:w-4/5">
                <input
                  id="name"
                  type="text"
                  placeholder="John"
                  className="border h-8 outline-none w-1/2 mr-2 rounded-sm p-2"
                />
                <input
                  id="name"
                  type="text"
                  placeholder="Doe"
                  className="border h-8 outline-none w-1/2 rounded-sm p-2"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row mb-3">
              <label
                htmlFor="email"
                className="whitespace-nowrap md:whitespace-normal w-1/5 mt-1 mb-1"
              >
                Email
              </label>
              <input
                id="email"
                type="text"
                placeholder="john@gmail.com"
                className="border h-8 outline-none md:w-4/5 rounded-sm p-2"
              />
            </div>
            <div className="flex flex-col md:flex-row mb-3">
              <label
                htmlFor="password"
                className="whitespace-nowrap md:whitespace-normal w-1/5 mt-1 mb-1"
              >
                Password
              </label>
              <input
                id="password"
                type="text"
                placeholder="******"
                className="border h-8 outline-none md:w-4/5 rounded-sm p-2"
              />
            </div>
            <ModalButtons type="add" onClick={onChangeModal} />
          </form>
        </div>
      </div>
    </>
  );
};

export default AddActorModalForm;
