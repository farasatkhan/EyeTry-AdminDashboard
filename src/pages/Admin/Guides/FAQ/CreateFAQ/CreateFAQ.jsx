import React, { useState } from "react";

import { FaRegEdit } from "react-icons/fa";
import { BsFillTrashFill } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";

import CreateFAQStyles from "./CreateFAQ.module.css";

const CreateFAQ = () => {
  const [answer, setAnswer] = useState("");

  const handleAnswerValueChange = (e) => {
    setAnswer(e.target.value);
  };

  return (
    <div className="mx-7 mb-20">
      <div className="flex flex-grow justify-between mt-7">
        <div className="flex flex-col">
          <div className="flex gap-1">
            <p className="font-light text-slate-500">Guides /</p>
            <p className="">FAQs</p>
          </div>
          <div className="mt-2">
            <p className="text-2xl">FAQs</p>
          </div>
        </div>
        <div className="flex">
          <button className="w-36 h-10 rounded-md text-white focus:outline-none bg-blue-600">
            <p className="">Add new FAQ</p>
          </button>
        </div>
      </div>
      <div className="mt-5 flex gap-2 h-full">
        <div className="w-full mb-20">
          <form action="" className="flex flex-col gap-5">
            <input
              type="text"
              className="border p-2 rounded-md w-full outline-none text-sm"
              placeholder="Question"
            />
            <textarea
              id="textarea"
              className="border p-2 rounded-md w-full outline-none text-sm"
              rows="5"
              value={answer}
              onChange={handleAnswerValueChange}
              placeholder="Answer"
            />
          </form>
        </div>
      </div>
      <div>
        <p className="text-2xl">FAQs</p>
        <div className="flex flex-col gap-2 mt-5">
          <div className="flex justify-between">
            <p className="text-base font-semibold">
              What's the difference between eyeglasses and sunglasses?
            </p>
            <div className="flex gap-5">
              <FaRegEdit size={20} className="cursor-pointer" />
              <BsFillTrashFill size={20} className="cursor-pointer" />
              <IoIosArrowDown size={20} className="cursor-pointer" />
            </div>
          </div>
          <div>
            <span className="text-sm">
              Eyeglasses are designed to correct vision impairments, such as
              nearsightedness or farsightedness. Sunglasses, on the other hand,
              are primarily intended to protect your eyes from harmful UV rays
              and reduce glare from the sun. While some eyeglasses can also have
              tinted lenses, their main purpose is vision correction.
            </span>
          </div>
        </div>
        <div className="flex justify-center items-center mt-10 mb-10">
          <button className="w-40 h-10 rounded-md text-white focus:outline-none bg-black">
            <p className="text-white">See More</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateFAQ;
