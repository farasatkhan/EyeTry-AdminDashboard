import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import AddProductsStyles from "./AddProducts.module.css";

import ProductImage from "../../../../assets/images/products/product_4.jfif";
import ProductBasketImage from "../../../../assets/images/images-basket.png";

import { BsTrash } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";

const AddProducts = () => {
  const currencies = ["USD", "PKR", "IND"];
  const categories = ["Men", "Women", "Kids"];
  const subcategories = ["Sub Category 1", "Sub Category 2", "Sub Category 3"];

  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [stockStatus, setStockStatus] = useState("");

  const [value, setValue] = useState("");

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSubCategoryChange = (event) => {
    setSelectedSubCategory(event.target.value);
  };

  const handleStockStatusChange = (event) => {
    setStockStatus(event.target.value);
  };

  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"],
      [{ list: "bullet" }, { list: "ordered" }],
      ["link", "image", "blockquote"],
    ],
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row flex-grow justify-between ml-7 mr-7 mt-7">
        <div className="flex flex-col mb-5 md:mb-0">
          <div className="flex gap-1">
            <p className="font-light text-slate-500">Products /</p>
            <p className="">Products</p>
          </div>
          <div className="mt-2">
            <p className="text-2xl">Products</p>
          </div>
        </div>
        <div className="flex flex-grow md:flex-grow-0 gap-4">
          <div className="flex w-full">
            <button className="w-full md:w-36 h-10 rounded-md text-white focus:outline-none bg-blue-600">
              <p className="">Add Products</p>
            </button>
          </div>
          <div className="flex w-full">
            <button
              className="w-full md:w-36 h-10 rounded-md text-white focus:outline-none bg-white border"
              onClick={() => changeModalHandle("Add new user", "add")}
            >
              <p className="text-black">Import</p>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${AddProductsStyles["line-height"]} bg-slate-100 ml-7 mr-7 mt-7`}
      ></div>
      <div className="flex mx-5 mt-5">
        <form action="/" className="flex flex-col md:flex-row flex-grow gap-2">
          {/* this is left side */}
          <div className="flex flex-col w-full md:w-4/6">
            <div className="shadow mb-10">
              <div className="pl-4 py-4">
                <p>Product Information</p>
              </div>
              <div
                className={`${AddProductsStyles["line-height"]} bg-slate-100`}
              ></div>
              <div className="px-5 py-5">
                <div className="mb-3">
                  <label htmlFor="product_name" className="text-sm">
                    Product Name
                  </label>
                  <input
                    id="product_name"
                    type="text"
                    className="border p-2 rounded-md w-full outline-none text-sm"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="sku" className="text-sm">
                    SKU
                  </label>
                  <input
                    id="sku"
                    type="text"
                    className="border p-2 rounded-md w-full outline-none text-sm"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="summary" className="text-sm">
                    Product Summary
                  </label>
                  <textarea
                    id="summary"
                    rows={3}
                    className="border p-2 rounded-md w-full outline-none text-sm"
                  />
                </div>
                <div className="flex justify-end">
                  <button className="w-full h-12 md:w-36 md:h-10 rounded-md text-white focus:outline-none bg-blue-600">
                    <p className="">Save Changes</p>
                  </button>
                </div>
              </div>
            </div>
            <div className="shadow mb-10">
              <div className="pl-4 py-4">
                <p>Details</p>
              </div>
              <div
                className={`${AddProductsStyles["line-height"]} bg-slate-100`}
              ></div>
              <div className="px-5 py-5">
                <div className="mb-3 min-h-32">
                  <ReactQuill
                    theme="snow"
                    value={value}
                    onChange={setValue}
                    modules={modules}
                  />
                </div>
                <div className="flex justify-end">
                  <button className="w-full h-12 md:w-36 md:h-10 rounded-md text-white focus:outline-none bg-blue-600">
                    <p className="">Save Changes</p>
                  </button>
                </div>
              </div>
            </div>
            <div className="shadow mb-10">
              <div className="pl-4 py-4">
                <p>Images</p>
              </div>
              <div
                className={`${AddProductsStyles["line-height"]} bg-slate-100`}
              ></div>
              <div className="px-5 pt-5">
                <div className="flex flex-wrap md:justify-start gap-2 lg:gap-10">
                  <div
                    className={`${AddProductsStyles["custom-width-percentage"]} flex flex-col flex-shrink-0 border rounded-md lg:w-1/4 mb-4`}
                  >
                    <div className="border-b cursor-pointer">
                      <img
                        className="object-contain"
                        src={ProductImage}
                        alt="product"
                      />
                    </div>
                    <div className="flex justify-between items-center mx-4 my-3 h-1/5 py-2">
                      <AiOutlineEye size={20} className="cursor-pointer" />
                      <BsTrash
                        size={20}
                        className="text-danger-900 cursor-pointer"
                      />
                    </div>
                  </div>
                  <div
                    className={`${AddProductsStyles["custom-width-percentage"]} flex flex-col flex-shrink-0 border rounded-md lg:w-1/4 mb-4`}
                  >
                    <div className="border-b cursor-pointer">
                      <img
                        className="object-contain"
                        src={ProductImage}
                        alt="product"
                      />
                    </div>
                    <div className="flex justify-between items-center mx-4 my-3 h-1/5 py-2">
                      <AiOutlineEye size={20} className="cursor-pointer" />
                      <BsTrash
                        size={20}
                        className="text-danger-900 cursor-pointer"
                      />
                    </div>
                  </div>
                  <div
                    className={`${AddProductsStyles["custom-width-percentage"]} flex flex-col flex-shrink-0 border rounded-md lg:w-1/4 mb-4`}
                  >
                    <div className="border-b cursor-pointer">
                      <img
                        className="object-contain"
                        src={ProductImage}
                        alt="product"
                      />
                    </div>
                    <div className="flex justify-between items-center mx-4 my-3 h-1/5 py-2">
                      <AiOutlineEye size={20} className="cursor-pointer" />
                      <BsTrash
                        size={20}
                        className="text-danger-900 cursor-pointer"
                      />
                    </div>
                  </div>
                  <div
                    className={`${AddProductsStyles["custom-width-percentage"]} flex flex-col flex-shrink-0 border rounded-md lg:w-1/4 mb-4`}
                  >
                    <div className="border-b cursor-pointer">
                      <img
                        className="object-contain"
                        src={ProductImage}
                        alt="product"
                      />
                    </div>
                    <div className="flex justify-between items-center mx-4 my-3 h-1/5 py-2">
                      <AiOutlineEye size={20} className="cursor-pointer" />
                      <BsTrash
                        size={20}
                        className="text-danger-900 cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className={`${AddProductsStyles["border-width"]} border border-dotted mt-5 mb-4 mx-1 rounded-md`}
                >
                  <div className="flex flex-col gap-2 justify-center items-center py-10 cursor-pointer">
                    <div className="flex justify-center items-center h-40 w-40">
                      <img
                        src={ProductBasketImage}
                        alt="basket"
                        className="object-contain"
                      />
                    </div>
                    <p className="text-sm">Drag and drop your file here</p>
                    <p className="text-sm">or</p>
                    <div className="">
                      <button className="w-28 h-10 rounded-md text-white focus:outline-none border">
                        <p className="text-black text-sm">Browse files</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* this is right side */}
          <div className="flex flex-col w-full md:w-2/6">
            <div className="shadow mb-10">
              <div className="pl-4 py-4">
                <p>Pricing</p>
              </div>
              <div
                className={`${AddProductsStyles["line-height"]} bg-slate-100`}
              ></div>
              <div className="px-5 py-5">
                <div className="flex flex-col mb-4">
                  <label htmlFor="price">Price</label>
                  <div className="flex">
                    <input
                      id="price"
                      type="text"
                      className="border p-2 rounded-s-md w-full outline-none text-sm"
                      placeholder="0.00"
                    />
                    <select
                      value={selectedCurrency}
                      onChange={handleCurrencyChange}
                      className="border px-1 sm:px-3 py-1 rounded-e-md outline-none text-sm cursor-pointer"
                    >
                      {currencies.map((option) => (
                        <option
                          key={option}
                          value={option}
                          className="cursor-pointer"
                        >
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="flex flex-col mb-4">
                  <label htmlFor="discount">Discount in percentage</label>
                  <div className="flex">
                    <input
                      id="discount"
                      type="text"
                      className="border p-2 rounded-md w-full outline-none text-sm"
                      placeholder="0%"
                    />
                  </div>
                </div>
                <div className="flex flex-col mb-4">
                  <label htmlFor="finalprice">Final Price</label>
                  <div className="flex">
                    <input
                      id="finalprice"
                      type="text"
                      className="border p-2 rounded-md w-full outline-none text-sm"
                      placeholder="0"
                      disabled
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="shadow mb-10">
              <div className="pl-4 py-4">
                <p>Type</p>
              </div>
              <div
                className={`${AddProductsStyles["line-height"]} bg-slate-100`}
              ></div>
              <div className="px-5 py-5">
                <div className="flex flex-col mb-4">
                  <label htmlFor="category" className="text-sm mb-1">
                    Select Category
                  </label>
                  <div className="flex flex-grow">
                    <select
                      placeholder="Select"
                      value={selectedCategory}
                      onChange={handleCategoryChange}
                      className="w-full h-10 border px-1 sm:px-3 py-1 rounded-md outline-none text-sm cursor-pointer"
                    >
                      <option value="" disabled selected>
                        Select
                      </option>
                      {categories.map((option) => (
                        <option
                          key={option}
                          value={option}
                          className="cursor-pointer"
                        >
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="flex flex-col mb-4">
                  <label htmlFor="subcategory" className="text-sm mb-1">
                    Select sub-category
                  </label>
                  <div className="flex flex-grow">
                    <select
                      value={selectedSubCategory}
                      onChange={handleSubCategoryChange}
                      className="w-full h-10 border px-1 sm:px-3 py-1 rounded-md outline-none text-sm cursor-pointer"
                    >
                      <option value="" disabled selected>
                        Select
                      </option>
                      {subcategories.map((option) => (
                        <option
                          key={option}
                          value={option}
                          className="cursor-pointer"
                        >
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="shadow mb-10">
              <div className="pl-4 py-4">
                <p>Stock Status</p>
              </div>
              <div
                className={`${AddProductsStyles["line-height"]} bg-slate-100`}
              ></div>
              <div className="px-5 py-5">
                <div className="cursor-pointer mb-3">
                  <input
                    type="radio"
                    id="instock"
                    value="instock"
                    checked={stockStatus === "instock"}
                    onChange={handleStockStatusChange}
                    className="mr-4 cursor-pointer"
                  />
                  <label htmlFor="instock" className="mr-4 cursor-pointer">
                    In stock
                  </label>
                </div>
                <div className="cursor-pointer mb-3">
                  <input
                    type="radio"
                    id="unavailable"
                    value="unavailable"
                    checked={stockStatus === "unavailable"}
                    onChange={handleStockStatusChange}
                    className="mr-4 cursor-pointer"
                  />
                  <label htmlFor="unavailable" className="mr-4 cursor-pointer">
                    Unavailable
                  </label>
                </div>
                <div className="cursor-pointer mb-3">
                  <input
                    type="radio"
                    id="tobe_announced"
                    value="tobe_announced"
                    checked={stockStatus === "tobe_announced"}
                    onChange={handleStockStatusChange}
                    className="mr-4 cursor-pointer"
                  />
                  <label
                    htmlFor="tobe_announced"
                    className="mr-4 cursor-pointer"
                  >
                    To be announced
                  </label>
                </div>
              </div>
            </div>
            <div className="shadow mb-10">
              <div className="pl-4 py-4">
                <p>Tags</p>
              </div>
              <div
                className={`${AddProductsStyles["line-height"]} bg-slate-100`}
              ></div>
              <div className="px-5 py-5">
                <div className="flex flex-col mb-4">
                  <label htmlFor="tags">Add keywords:</label>
                  <div className="flex">
                    <input
                      id="tags"
                      type="text"
                      className="border p-2 rounded-md w-full outline-none text-sm"
                    />
                  </div>
                </div>
                <div className="flex justify-end">
                  <button className="w-full h-12 md:w-36 md:h-10 rounded-md text-white focus:outline-none bg-blue-600">
                    <p className="">Add</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
