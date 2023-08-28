import React, { useState } from "react";

import { newProduct } from "../../../../services/Products/glasses";

import AddProductsStyles from "./AddProducts.module.css";

import ProductImage from "../../../../assets/images/products/product_4.jfif";
import ProductBasketImage from "../../../../assets/images/images-basket.png";

import { BsTrash, BsX } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
import { newCategory } from "../../../../services/Products/categories";

const AddProducts = () => {
  const [categoriesList, setCategoriesList] = useState([
    "Men",
    "Women",
    "Kids",
  ]);

  const [ProductType, setProductType] = useState([
    "Sunglasses",
    "Eyeglasses",
    "Lens",
  ]);

  const [frameMaterialList, setFrameMaterialList] = useState([
    "Acetate",
    "Metal",
    "TR-90",
  ]);

  const [frameSizeList, setFrameSizeList] = useState([
    "Small",
    "Medium",
    "Large",
  ]);

  const [newFrameSize, setNewFrameSize] = useState("");

  const [viewToggle, setViewToggle] = useState({
    category: false,
    frame_material: false,
    frame_size: false,
  });

  const [stockStatus, setStockStatus] = useState("");

  // Submitting Product //

  const [productBasicInformation, setProductBasicInformation] = useState({
    name: "",
    sku: "",
    description: "",
    manufacturer: "",
    type: "",
    price: 0,
    currency: "USD",
    discount: 0,
    categories: [],
    meta_title: "",
    meta_keywords: "",
    meta_description: "",
    frame_material: [],
    frame_size: [],
  });

  const handleSubmittedProducts = async (e) => {
    e.preventDefault();

    const productInformation = { ...productBasicInformation };

    console.log(productInformation);

    try {
      const addNewProduct = await newProduct(productInformation);
      console.log("Product added successfully!", addNewProduct);
    } catch (error) {
      console.error("Failed to add product:", error);
    }
  };

  const handleSelectedCategories = async (event) => {
    const value = event.target.labels[0].textContent;

    const updatedCategories = () => {
      if (event.target.checked) {
        return [...productBasicInformation.categories, value];
      } else {
        return productBasicInformation.categories.filter(
          (category) => category !== value
        );
      }
    };

    setProductBasicInformation((prevInformation) => ({
      ...prevInformation,
      categories: updatedCategories(),
    }));

    console.log("selected categories: ", productBasicInformation.categories);
  };

  const [addCategory, setAddCategory] = useState("");

  const handleSubmittedCategory = async () => {
    try {
      if (!categoriesList.includes(addCategory)) {
        setCategoriesList((prevCategories) => [...prevCategories, addCategory]);
      } else {
        console.log("Category is already present");
      }
      // const data = { category: addCategory };
      // const addNewCategory = await newCategory(data);
      // console.log("Category is added successfully.", addNewCategory);
    } catch (error) {
      console.error("Failed to add category", error);
    }
  };

  const [addNewFrameMaterial, setAddNewFrameMaterial] = useState("");
  const [addNewFrameSize, setAddNewFrameSize] = useState("");

  const handleSubmittedFrameMaterial = async () => {
    if (!frameMaterialList.includes(addNewFrameMaterial)) {
      setFrameMaterialList((prevFrameMaterials) => [
        ...prevFrameMaterials,
        addNewFrameMaterial,
      ]);
    } else {
      console.log("Frame material is already present.");
    }
  };

  const handleSubmittedNewFrameSize = async () => {
    if (!frameSizeList.includes(addNewFrameSize)) {
      setFrameSizeList((prevFrameSize) => [...prevFrameSize, addNewFrameSize]);
    } else {
      console.log("Frame size is already present.");
    }
  };

  ////////////////////////

  return (
    <div className="mx-5 md:mx-10 lg:mx-20 flex flex-col">
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
          {/* <div className="flex w-full">
            <button className="w-full md:w-36 h-10 rounded-md text-white focus:outline-none bg-blue-600">
              <p className="">Add Products</p>
            </button>
          </div> */}
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
        <form
          onSubmit={handleSubmittedProducts}
          className="flex flex-col md:flex-row flex-grow gap-10"
        >
          {/* this is left side */}
          <div className="flex flex-col w-full md:w-4/6">
            <div className="bg-white border shadow mb-10 rounded-lg">
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
                    autoComplete="off"
                    value={productBasicInformation.name}
                    onChange={(e) =>
                      setProductBasicInformation({
                        ...productBasicInformation,
                        name: e.target.value,
                      })
                    }
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
                    autoComplete="off"
                    value={productBasicInformation.sku}
                    onChange={(e) =>
                      setProductBasicInformation({
                        ...productBasicInformation,
                        sku: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="manufacturer" className="text-sm">
                    Manufacturer
                  </label>
                  <input
                    id="manufacturer"
                    type="text"
                    className="border p-2 rounded-md w-full outline-none text-sm"
                    autoComplete="off"
                    value={productBasicInformation.manufacturer}
                    onChange={(e) =>
                      setProductBasicInformation({
                        ...productBasicInformation,
                        manufacturer: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="text-sm">
                    Product Description
                  </label>
                  <textarea
                    id="description"
                    rows={3}
                    className="border p-2 rounded-md w-full outline-none text-sm"
                    autoComplete="off"
                    value={productBasicInformation.description}
                    onChange={(e) =>
                      setProductBasicInformation({
                        ...productBasicInformation,
                        description: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="w-full h-12 md:w-36 md:h-10 rounded-md text-white focus:outline-none bg-blue-600"
                  >
                    <p className="">Save Changes</p>
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white border shadow mb-10 rounded-lg">
              <div className="pl-4 py-4">
                <p>Meta Details</p>
              </div>
              <div
                className={`${AddProductsStyles["line-height"]} bg-slate-100`}
              ></div>
              <div className="px-5 py-5">
                <div className="mb-3">
                  <label htmlFor="meta_title" className="text-sm">
                    Title
                  </label>
                  <input
                    id="meta_title"
                    type="text"
                    className="border p-2 rounded-md w-full outline-none text-sm"
                    autoComplete="off"
                    value={productBasicInformation.meta_title}
                    onChange={(e) =>
                      setProductBasicInformation({
                        ...productBasicInformation,
                        meta_title: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="meta_keywords" className="text-sm">
                    Keywords Separated by Comma
                  </label>
                  <input
                    id="meta_keywords"
                    type="text"
                    className="border p-2 rounded-md w-full outline-none text-sm"
                    autoComplete="off"
                    value={productBasicInformation.meta_keywords}
                    onChange={(e) =>
                      setProductBasicInformation({
                        ...productBasicInformation,
                        meta_keywords: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="meta_description" className="text-sm">
                    Description
                  </label>
                  <textarea
                    id="meta_description"
                    rows={3}
                    className="border p-2 rounded-md w-full outline-none text-sm"
                    autoComplete="off"
                    value={productBasicInformation.meta_description}
                    onChange={(e) =>
                      setProductBasicInformation({
                        ...productBasicInformation,
                        meta_description: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            </div>
            <div className="bg-white border shadow mb-10 rounded-lg">
              <div className="pl-4 py-4">
                <p>More Details</p>
              </div>
              <div
                className={`${AddProductsStyles["line-height"]} bg-slate-100`}
              ></div>
              <div className="px-5 py-5">
                <div className="flex flex-col mb-4">
                  <label htmlFor="subcategory" className="text-sm mb-1">
                    Select sub-category
                  </label>
                  <div className="flex flex-grow">
                    <select
                      value={productBasicInformation.type}
                      onChange={(e) =>
                        setProductBasicInformation((prevInformation) => ({
                          ...prevInformation,
                          type: e.target.value,
                        }))
                      }
                      className="w-full h-10 border px-1 sm:px-3 py-1 rounded-md outline-none text-sm cursor-pointer"
                    >
                      <option value="" disabled>
                        Select
                      </option>
                      {ProductType.map((type, index) => (
                        <option key={index} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white border shadow mb-10 rounded-lg">
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
            <div className="bg-white border shadow mb-10 rounded-lg">
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
                      onChange={(e) =>
                        setProductBasicInformation({
                          ...productBasicInformation,
                          price: e.target.value,
                        })
                      }
                    />
                    <select
                      id="currency"
                      value={productBasicInformation.currency}
                      onChange={(e) =>
                        setProductBasicInformation({
                          ...productBasicInformation,
                          currency: e.target.value,
                        })
                      }
                      className="border px-1 sm:px-3 py-1 rounded-e-md outline-none text-sm cursor-pointer"
                    >
                      <option key="USD" value="USD" className="cursor-pointer">
                        USD
                      </option>
                      <option key="PKR" value="PKR" className="cursor-pointer">
                        PKR
                      </option>
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
                      onChange={(e) =>
                        setProductBasicInformation({
                          ...productBasicInformation,
                          discount: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                {/* <div className="flex flex-col mb-4">
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
                </div> */}
              </div>
            </div>
            <div className="bg-white border shadow mb-10 rounded-lg">
              <div className="pl-4 py-4">
                <p>Categories</p>
              </div>
              <div
                className={`${AddProductsStyles["line-height"]} bg-slate-100`}
              ></div>
              <div className="px-5 py-5">
                <div className="flex flex-col border-y border-slate-100 mb-4 max-h-40 overflow-y-auto">
                  {categoriesList.map((category, index) => (
                    <div
                      key={index}
                      className="flex py-2 gap-3 justify-start items-center cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        className="w-5 h-5 cursor-pointer"
                        id={`category-${index}`}
                        onChange={handleSelectedCategories}
                      />
                      <label
                        htmlFor={`category-${index}`}
                        className="cursor-pointer"
                      >
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col mb-4">
                  <div
                    className="cursor-pointer text-blue-500 underline select-none"
                    onClick={() =>
                      setViewToggle({
                        ...viewToggle,
                        category: !viewToggle.category,
                      })
                    }
                  >
                    <span className="text-sm">Add a new category</span>
                  </div>
                  <div
                    className={`${
                      viewToggle.category ? "block" : "hidden"
                    } mt-4`}
                  >
                    <label htmlFor="new_category" className="text-sm">
                      New category
                    </label>
                    <input
                      id="category"
                      type="text"
                      className="w-full p-2 border outline-none text-sm mt-2"
                      value={addCategory}
                      onChange={(e) => setAddCategory(e.target.value)}
                    />
                    <div className="mt-2">
                      <div
                        className="flex justify-center items-center w-full py-2 border bg-blue-500 cursor-pointer"
                        onClick={handleSubmittedCategory}
                      >
                        <span className="text-center text-sm text-white">
                          Add New Category
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="flex flex-col mb-4">
                  <label htmlFor="subcategory" className="text-sm mb-1">
                    Select sub-category
                  </label>
                  <div className="flex flex-grow">
                    <select
                      value={selectedSubCategory}
                      onChange={(e) => setSelectedSubCategory(e.target.value)}
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
                </div> */}
              </div>
            </div>
            <div className="bg-white border shadow mb-10 rounded-lg">
              <div className="pl-4 py-4">
                <p>Frame Material</p>
              </div>
              <div
                className={`${AddProductsStyles["line-height"]} bg-slate-100`}
              ></div>
              <div className="px-5 py-5">
                <div className="flex flex-col border-y border-slate-100 mb-4 max-h-40 overflow-y-auto">
                  {frameMaterialList.map((frameMaterial, index) => (
                    <div key={index} className="flex justify-between pr-5">
                      <div className="flex py-2 gap-3 justify-start items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="w-5 h-5 cursor-pointer"
                          id={`frameMaterial-${index}`}
                        />
                        <label
                          htmlFor={`frameMaterial-${index}`}
                          className="cursor-pointer"
                        >
                          {frameMaterial}
                        </label>
                      </div>
                      <div
                        className="flex justify-center items-center cursor-pointer"
                        onClick={() => {
                          setFrameMaterialList(
                            frameMaterialList.filter(
                              (material) => material !== frameMaterial
                            )
                          );
                        }}
                      >
                        <BsX size={25} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col mb-4">
                  <div
                    className="cursor-pointer text-blue-500 underline select-none"
                    onClick={() =>
                      setViewToggle({
                        ...viewToggle,
                        frame_material: !viewToggle.frame_material,
                      })
                    }
                  >
                    <span className="text-sm">Add a new frame material</span>
                  </div>
                  <div
                    className={`${
                      viewToggle.frame_material ? "block" : "hidden"
                    } mt-4`}
                  >
                    <label htmlFor="new_category" className="text-sm">
                      New frame material
                    </label>
                    <input
                      id="category"
                      type="text"
                      className="w-full p-2 border outline-none text-sm mt-2"
                      value={addNewFrameMaterial}
                      onChange={(e) => setAddNewFrameMaterial(e.target.value)}
                    />
                    <div className="mt-2">
                      <div
                        className="flex justify-center items-center w-full py-2 border bg-blue-500 cursor-pointer"
                        onClick={handleSubmittedFrameMaterial}
                      >
                        <span className="text-center text-sm text-white">
                          Add New Frame Material
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white border shadow mb-10 rounded-lg">
              <div className="pl-4 py-4">
                <p>Frame Size</p>
              </div>
              <div
                className={`${AddProductsStyles["line-height"]} bg-slate-100`}
              ></div>
              <div className="px-5 py-5">
                <div className="flex flex-col border-y border-slate-100 mb-4 max-h-40 overflow-y-auto">
                  {frameSizeList.map((frameSize, index) => (
                    <div key={index} className="flex justify-between pr-5">
                      <div className="flex py-2 gap-3 justify-start items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="w-5 h-5 cursor-pointer"
                          id={`frameSize-${index}`}
                        />
                        <label
                          htmlFor={`frameSize-${index}`}
                          className="cursor-pointer"
                        >
                          {frameSize}
                        </label>
                      </div>
                      <div
                        className="flex justify-center items-center cursor-pointer"
                        onClick={() => {
                          setFrameSizeList(
                            frameSizeList.filter((size) => size !== frameSize)
                          );
                        }}
                      >
                        <BsX size={25} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col mb-4">
                  <div
                    className="cursor-pointer text-blue-500 underline select-none"
                    onClick={() =>
                      setViewToggle({
                        ...viewToggle,
                        frame_size: !viewToggle.frame_size,
                      })
                    }
                  >
                    <span className="text-sm">Add a new frame size</span>
                  </div>
                  <div
                    className={`${
                      viewToggle.frame_size ? "block" : "hidden"
                    } mt-4`}
                  >
                    <label htmlFor="new_category" className="text-sm">
                      New frame size
                    </label>
                    <input
                      id="category"
                      type="text"
                      className="w-full p-2 border outline-none text-sm mt-2"
                      value={addNewFrameSize}
                      onChange={(e) => setAddNewFrameSize(e.target.value)}
                    />
                    <div className="mt-2">
                      <div
                        className="flex justify-center items-center w-full py-2 border bg-blue-500 cursor-pointer"
                        onClick={handleSubmittedNewFrameSize}
                      >
                        <span className="text-center text-sm text-white">
                          Add New Frame Size
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white border shadow mb-10 rounded-lg">
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
                    onChange={(e) => setStockStatus(e.target.value)}
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
                    onChange={(e) => setStockStatus(e.target.value)}
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
                    onChange={(e) => setStockStatus(e.target.value)}
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
            <div className="bg-white border shadow mb-10 rounded-lg">
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
                {/* <div className="flex justify-end">
                  <button className="w-full h-12 md:w-36 md:h-10 rounded-md text-white focus:outline-none bg-blue-600">
                    <p className="">Add</p>
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
