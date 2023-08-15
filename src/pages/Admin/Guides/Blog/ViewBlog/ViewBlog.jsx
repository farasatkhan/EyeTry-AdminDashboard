import React from "react";

import BlogCover from "../../../../../assets/blog/help-center-cover_dark.png";
import Blog1 from "../../../../../assets/blog/blog-1.jpg";
import BlogCard from "../../../../../layouts/Admin/BlogCard";

import { BiSearch } from "react-icons/bi";

const ViewBlog = () => {
  return (
    <div className="">
      <div
        className={`bg-black bg-cover bg-center`}
        style={{ backgroundImage: `url(${BlogCover})` }}
      >
        <div className="flex flex-col flex-grow justify-center items-center px-5 py-10 md:py-16 lg:py-20">
          <p className="font-bold text-4xl text-center text-white">
            Help Center
          </p>
          <p className="text-base sm:text-xl text-center mt-3 text-white">
            Get the Support You Need: Explore Our Help Center
          </p>
          <div className="flex justify-center items-center w-full sm:w-1/2 lg:w-1/3 mt-5 bg-white px-3 shadow rounded-lg">
            <input
              type="text"
              name="search"
              className="w-full h-10 outline-none"
              placeholder="Search"
            />
            <BiSearch size={30} className="text-slate-500" />
          </div>
        </div>
      </div>
      <div className="mx-5 lg:mx-24 my-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10">
          <BlogCard
            title="Clarity and Style: The Ultimate Guide to Selling Glasses with Vision and Flair"
            author="Author"
            date="30 Jul, 2023"
            description="Mastering the Art of Eyewear Retail: From Frame Selection to Fashion Forward Sales Strategies"
            image={Blog1}
          />
          <BlogCard
            title="Clarity and Style: The Ultimate Guide to Selling Glasses with Vision and Flair"
            author="Author"
            date="30 Jul, 2023"
            description="Mastering the Art of Eyewear Retail: From Frame Selection to Fashion Forward Sales Strategies"
            image={Blog1}
          />
          <BlogCard
            title="Clarity and Style: The Ultimate Guide to Selling Glasses with Vision and Flair"
            author="Author"
            date="30 Jul, 2023"
            description="Mastering the Art of Eyewear Retail: From Frame Selection to Fashion Forward Sales Strategies"
            image={Blog1}
          />
          <BlogCard
            title="Clarity and Style: The Ultimate Guide to Selling Glasses with Vision and Flair"
            author="Author"
            date="30 Jul, 2023"
            description="Mastering the Art of Eyewear Retail: From Frame Selection to Fashion Forward Sales Strategies"
            image={Blog1}
          />
        </div>
      </div>
      <div className="flex justify-center items-center mb-10">
        <button className="w-40 h-10 rounded-md text-white focus:outline-none bg-black">
          <p className="text-white">See More</p>
        </button>
      </div>
    </div>
  );
};

export default ViewBlog;
