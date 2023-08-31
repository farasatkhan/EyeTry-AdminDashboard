import React from "react";

import BlogCover from "../../../../../assets/blog/help-center-cover_dark.png";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import BlogCard from "../../../../../layouts/Admin/BlogCard";
import Blog1 from "../../../../../assets/blog/blog-1.jpg";

const ViewFAQ = () => {
  return (
    <div className="font-body">
      <div
        className={`bg-black bg-cover bg-center`}
        style={{ backgroundImage: `url(${BlogCover})` }}
      >
        <div className="flex flex-col flex-grow justify-center items-center px-2 py-10 md:py-16 lg:py-20">
          <p className="w-full text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center text-white">
            Frequently Asked Questions (FAQ)
          </p>
          <p className="w-full sm:w-5/6 md:w-4/6 text-sm lg:text-base text-center mt-3 text-white">
            We've compiled a list of commonly asked questions for your
            convenience. If you are unable to find the answer to your question,
            please contact us for further assistance.
          </p>
        </div>
      </div>
      <div className="mx-10 sm:mx-20 md:mx-32 lg:mx-60 my-10">
        <div>
          <p className="text-2xl">FAQs</p>
          <div className="flex flex-col gap-2 mt-5">
            <div className="flex justify-between">
              <p className="w-11/12 text-base font-semibold">
                What's the difference between eyeglasses and sunglasses?
              </p>
              <div className="w-1/12 flex justify-end gap-5">
                <IoIosArrowUp size={20} className="cursor-pointer" />
              </div>
            </div>
            <div>
              <span className="text-sm">
                Eyeglasses are designed to correct vision impairments, such as
                nearsightedness or farsightedness. Sunglasses, on the other
                hand, are primarily intended to protect your eyes from harmful
                UV rays and reduce glare from the sun. While some eyeglasses can
                also have tinted lenses, their main purpose is vision
                correction.
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-5">
            <div className="flex justify-between">
              <p className="w-11/12 text-base font-semibold">
                What's the difference between eyeglasses and sunglasses?
              </p>
              <div className="w-1/12 justify-end flex gap-5">
                <IoIosArrowDown size={20} className="cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center mt-10 mb-10">
            <button className="w-40 h-10 rounded-md text-white focus:outline-none bg-black">
              <p className="text-white">See More</p>
            </button>
          </div>
        </div>
      </div>
      {/* <div className="mx-20 sm:mx-10 lg:mx-24 my-10">
        <div className="mb-5">
          <span className="text-2xl font-bold">Related Articles</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          <BlogCard
            title="The Ultimate Guide to Selling Glasses with Vision and Flair"
            author="Author"
            date="30 Jul, 2023"
            description="From Frame Selection to Fashion Forward Sales Strategies"
            image={Blog1}
          />
          <BlogCard
            title="The Ultimate Guide to Selling Glasses with Vision and Flair"
            author="Author"
            date="30 Jul, 2023"
            description="From Frame Selection to Fashion Forward Sales Strategies"
            image={Blog1}
          />
          <BlogCard
            title="The Ultimate Guide to Selling Glasses with Vision and Flair"
            author="Author"
            date="30 Jul, 2023"
            description="From Frame Selection to Fashion Forward Sales Strategies"
            image={Blog1}
          />
          <BlogCard
            title="The Ultimate Guide to Selling Glasses with Vision and Flair"
            author="Author"
            date="30 Jul, 2023"
            description="From Frame Selection to Fashion Forward Sales Strategies"
            image={Blog1}
          />
        </div>
      </div> */}
    </div>
  );
};

export default ViewFAQ;
