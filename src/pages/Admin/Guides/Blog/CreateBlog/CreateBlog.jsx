import React, { useState } from "react";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import ProductBasketImage from "../../../../../assets/images/images-basket.png";

import CreateBlogStyles from "./CreateBlog.module.css";

const CreateBlog = () => {
  const [value, setValue] = useState("");

  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"],
      [{ list: "bullet" }, { list: "ordered" }],
      ["link", "image", "blockquote"],
    ],
  };

  return (
    <div className={`${CreateBlogStyles["custom-height"]}`}>
      <div className="flex flex-grow justify-between ml-7 mr-7 mt-7">
        <div className="flex flex-col">
          <div className="flex gap-1">
            <p className="font-light text-slate-500">Guides /</p>
            <p className="">New Blog</p>
          </div>
          <div className="mt-2">
            <p className="text-2xl">New Blog</p>
          </div>
        </div>
        <div className="flex">
          <button
            className="w-36 h-10 rounded-md text-white focus:outline-none bg-blue-600"
            onClick={() => changeModalHandle("Add new user", "add")}
          >
            <p className="">Save</p>
          </button>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row mx-7 mt-5 gap-2 h-full">
        <div className="w-full lg:w-3/4 mb-20 lg:mb-0">
          <form action="">
            <input
              type="text"
              className="border p-2 rounded-md w-full outline-none text-sm"
              placeholder="Add a Blog Title"
            />
            <div className={`mt-5 ${CreateBlogStyles["custom-blog-height"]}`}>
              <ReactQuill
                theme="snow"
                value={value}
                onChange={setValue}
                modules={modules}
                className="h-full w-full outline-none text-sm"
              />
            </div>
          </form>
        </div>
        <div className="w-full lg:w-1/4">
          <div className="flex flex-col gap-2 justify-center items-center border border-dashed px-2 py-5">
            <div className="">
              <img
                src={ProductBasketImage}
                alt="product"
                className="object-cover"
              />
            </div>
            <p className="text-sm font-bold text-center">
              Drag and drop your file here
            </p>
            <p className="text-sm text-center">or</p>
            <div className="">
              <button className="w-28 h-10 rounded-md text-white focus:outline-none border">
                <p className="text-black text-sm text-center">Browse files</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
