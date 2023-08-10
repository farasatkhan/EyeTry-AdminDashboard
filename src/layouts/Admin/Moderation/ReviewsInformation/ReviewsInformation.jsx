import React from "react";

import { BiDollarCircle, BiHomeAlt2 } from "react-icons/bi";
import { BsFillCartCheckFill, BsTelephone, BsGraphUp } from "react-icons/bs";
import { SlLocationPin, SlCalender } from "react-icons/sl";
import { MdOutlineMail, MdPayment } from "react-icons/md";
import { GoHorizontalRule } from "react-icons/go";

import Person from "../../../../assets/images/test/person.jpg";

const ReviewsInformation = () => {
  return (
    <div className="flex flex-col lg:flex-row border rounded-md">
      {/* left side */}
      <div className="flex flex-col md:flex-row justify-center items-center sm:justify-evenly gap-5 px-10 py-10 border-b lg:border-b-0">
        <div className="flex flex-col mb-5 lg:mb-0">
          <div className="flex flex-col">
            <span className="text-sm">Total Reviews</span>
            <span className="text-5xl">10.0K</span>
            <div className="flex justify-center items-center gap-2 w-20 h-6 rounded-full bg-primary-100 mt-2 mb-5">
              <span>
                <BsGraphUp size={10} className="text-primary-900" />
              </span>
              <span className="text-primary-900 text-sm">21%</span>
            </div>
          </div>
          <span className="text-sm">Total reviews recieved this year</span>
        </div>
        <div className="flex flex-col mb-5 lg:mb-0">
          <div className="flex flex-col">
            <span className="text-sm">Average Rating</span>
            <span className="text-5xl">4.87</span>
            <div className="flex gap-2 mt-2 mb-5">
              <span>
                <GoHorizontalRule size={20} />
              </span>
              <span className="text-sm whitespace-nowrap">of 7 reviews</span>
              <div className="bg-slate-200 rounded-full">
                <span className="text-slate-600 whitespace-nowrap text-sm px-2 py-2">
                  +1 this week
                </span>
              </div>
            </div>
          </div>
          <span className="text-sm">Total rating recieved this year</span>
        </div>
      </div>
      {/* right side */}
      <div className="flex flex-col flex-grow gap-5 px-5 py-5 align-middle justify-center">
        <div className="flex flex-grow justify-center items-center gap-5">
          <span className="text-center w-1/6">5 stars</span>
          <div className="w-4/6 h-2 bg-slate-200 rounded-full">
            <div className="w-2/3 h-2 bg-blue-500 rounded-full"></div>
          </div>
          <span className="text-center w-1/6">143</span>
        </div>
        <div className="flex flex-grow justify-center items-center gap-5">
          <span className="text-center w-1/6">4 stars</span>
          <div className="w-4/6 h-2 bg-slate-200 rounded-full">
            <div className="w-1/3 h-2 bg-blue-500 rounded-full"></div>
          </div>
          <span className="text-center w-1/6">6</span>
        </div>
        <div className="flex flex-grow justify-center items-center gap-5">
          <span className="text-center w-1/6">3 stars</span>
          <div className="w-4/6 h-2 bg-slate-200 rounded-full">
            <div className="w-3/5 h-2 bg-blue-500 rounded-full"></div>
          </div>
          <span className="text-center w-1/6">5</span>
        </div>
        <div className="flex flex-grow justify-center items-center gap-5">
          <span className="text-center w-1/6">2 stars</span>
          <div className="w-4/6 h-2 bg-slate-200 rounded-full">
            <div className="w-2/12 h-2 bg-blue-500 rounded-full"></div>
          </div>
          <span className="text-center w-1/6">3</span>
        </div>
        <div className="flex flex-grow justify-center items-center gap-5">
          <span className="text-center w-1/6">1 stars</span>
          <div className="w-4/6 h-2 bg-slate-200 rounded-full">
            <div className="w-1/12 h-2 bg-blue-500 rounded-full"></div>
          </div>
          <span className="text-center w-1/6">1</span>
        </div>
      </div>
    </div>
  );
};

export default ReviewsInformation;
