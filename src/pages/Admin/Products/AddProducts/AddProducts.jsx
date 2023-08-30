import React, { useState } from "react";

import { newProduct } from "../../../../services/Products/glasses";

import AddProductsStyles from "./AddProducts.module.css";

import SelectImageIcon from "../../../../assets/icons/select_image.svg";

import { BsTrash, BsX } from "react-icons/bs";
import { AiOutlineEye, AiOutlineStar, AiFillStar } from "react-icons/ai";
import Pricing from "../../../../components/ui/Admin/AddProduct/Pricing/Pricing";
import Categories from "../../../../components/ui/Admin/AddProduct/Categories/Categories";
import FrameMaterial from "../../../../components/ui/Admin/AddProduct/FrameMaterial/FrameMaterial";
import FrameSize from "../../../../components/ui/Admin/AddProduct/FrameSize/FrameSize";
import FaceShape from "../../../../components/ui/Admin/AddProduct/FaceShape/FaceShape";
import Gender from "../../../../components/ui/Admin/AddProduct/Gender/Gender";
import FrameColors from "../../../../components/ui/Admin/AddProduct/FrameColors";
import MetaDetails from "../../../../components/ui/Admin/AddProduct/MetaDetails/MetaDetails";

const AddProducts = () => {
  const [ProductType, setProductType] = useState([
    "Sunglasses",
    "Eyeglasses",
    "Lens",
  ]);

  // Submitting Product //

  const [productBasicInformation, setProductBasicInformation] = useState({
    name: "",
    sku: "",
    description: "",
    manufacturer: "",
    type: "",
    measurement_type: "",
    lens_width: 0,
    lens_height: 0,
    total_width: 0,
    bridge_width: 0,
    temple_length: 0,
    is_multifocal: false,
    stock_status: "",
  });

  const [metaDetails, setMetaDetails] = useState({
    meta_title: "",
    meta_keywords: "",
    meta_description: "",
  });

  const updateProductMetaDetails = (updatedMetaDetails) => {
    setMetaDetails({
      meta_title: updatedMetaDetails.meta_title,
      meta_keywords: updatedMetaDetails.meta_keywords,
      meta_description: updatedMetaDetails.meta_description,
    });
  };

  const [productPricing, setProductPricing] = useState({
    price: 0,
    currency: "",
    discount: 0,
  });
  const [productCategories, setProductCategories] = useState([]);
  const [productFrameMaterials, setProductFrameMaterials] = useState([]);
  const [productFrameSizes, setProductFrameSizes] = useState([]);
  const [productFrameFaceShape, setProductFrameFaceShape] = useState([]);
  const [productFrameGender, setProductFrameGender] = useState([]);
  const [productFrameColors, setProductFrameColors] = useState([]);

  const updateProductPricing = (updatedPriceInformation) => {
    setProductPricing({
      price: updatedPriceInformation.price,
      currency: updatedPriceInformation.currency,
      discount: updatedPriceInformation.discount,
    });
  };

  const updatedProductCategories = (updatedCategory, checked) => {
    const updatedCategories = () => {
      if (checked) {
        return [...productCategories, updatedCategory];
      } else {
        return productCategories.filter(
          (category) => category !== updatedCategory
        );
      }
    };
    setProductCategories(updatedCategories());
  };

  const updatedProductFrameMaterials = (updatedMaterial, checked) => {
    const updatedFrameMaterials = () => {
      if (checked) {
        return [...productFrameMaterials, updatedMaterial];
      } else {
        return productFrameMaterials.filter(
          (material) => material !== updatedMaterial
        );
      }
    };
    setProductFrameMaterials(updatedFrameMaterials());
  };

  const updatedSelectedFrameSize = (updatedSize, checked) => {
    const updatedFrameSizes = () => {
      if (checked) {
        return [...productFrameSizes, updatedSize];
      } else {
        return productFrameSizes.filter((size) => size !== updatedSize);
      }
    };
    setProductFrameSizes(updatedFrameSizes());
  };

  const updatedSelectedFrameFaceShape = (updatedShape, checked) => {
    const updatedFrameFaceShapes = () => {
      if (checked) {
        return [...productFrameFaceShape, updatedShape];
      } else {
        return productFrameFaceShape.filter((shape) => shape !== updatedShape);
      }
    };
    setProductFrameFaceShape(updatedFrameFaceShapes());
  };

  const updatedSelectedFrameGenders = (updatedGender, checked) => {
    const updatedFrameGenders = () => {
      if (checked) {
        return [...productFrameGender, updatedGender];
      } else {
        return productFrameGender.filter((gender) => gender !== updatedGender);
      }
    };
    setProductFrameGender(updatedFrameGenders());
  };

  const updatedSelectedFrameColors = (updatedColor, checked) => {
    const updatedFrameColors = () => {
      if (checked) {
        return [...productFrameColors, updatedColor];
      } else {
        return productFrameColors.filter((size) => size !== updatedColor);
      }
    };
    setProductFrameColors(updatedFrameColors());
  };

  const [productVariantsMultiple, setProductVariantsMultiple] = useState([]);

  const handleImageChangeMultiple = (color, quantity, images) => {
    // console.log(color, quantity);
    setProductVariantsMultiple((prevProductVariant) => [
      ...prevProductVariant,
      { color: color, quantity: quantity, images: Array.from(images) },
    ]);

    console.log(productVariantsMultiple);
  };

  const handleProductVariantQuantity = (color) => {
    const variant = productVariantsMultiple.find(
      (variant) => variant.color === color
    );
    const quantity = variant ? variant.quantity : 0;
    return quantity;
  };

  const handleStockStatus = async (event) => {
    setProductBasicInformation((prevProductInformation) => ({
      ...prevProductInformation,
      stock_status: event.target.value,
    }));
  };

  const handleSubmittedProducts = async (e) => {
    e.preventDefault();

    const productInformation = {
      ...productBasicInformation,
      ...productPricing,
      ...metaDetails,
      categories: [...productCategories],
      frame_material: [...productFrameMaterials],
      frame_size: [...productFrameSizes],
      face_shape: [...productFrameFaceShape],
      genders: [...productFrameGender],
      frame_variants: productVariantsMultiple,
    };

    console.log(productBasicInformation);

    try {
      const addNewProduct = await newProduct(productInformation);
      console.log("Product added successfully!", addNewProduct);
    } catch (error) {
      console.error("Failed to add product:", error);
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
              <MetaDetails
                metaDetails={metaDetails}
                updateMetaDetails={updateProductMetaDetails}
              />
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
                    Select a category
                  </label>
                  <div className="flex flex-grow mt-2">
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
                <div className="flex mb-4 gap-20">
                  <div className="flex flex-grow flex-col">
                    <label htmlFor="subcategory" className="text-sm mb-1 w-2/3">
                      Measurement in
                    </label>
                    <div className="flex flex-grow mt-2">
                      <select
                        value={productBasicInformation.measurement_type}
                        onChange={(e) =>
                          setProductBasicInformation((prevInformation) => ({
                            ...prevInformation,
                            measurement_type: e.target.value,
                          }))
                        }
                        className="w-full h-10 border px-1 sm:px-3 py-1 rounded-md outline-none text-sm cursor-pointer"
                      >
                        <option value="" disabled>
                          Select
                        </option>
                        <option value="mm">mm</option>
                        <option value="in">in</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-grow flex-col">
                    <label htmlFor="subcategory" className="text-sm mb-1 w-2/3">
                      Is multifocal
                    </label>
                    <div className="flex flex-grow mt-2">
                      <select
                        value={productBasicInformation.is_multifocal}
                        onChange={(e) =>
                          setProductBasicInformation((prevInformation) => ({
                            ...prevInformation,
                            is_multifocal: e.target.value,
                          }))
                        }
                        className="w-full h-10 border px-1 sm:px-3 py-1 rounded-md outline-none text-sm cursor-pointer"
                      >
                        <option value="" disabled>
                          Select
                        </option>
                        <option value="true">True</option>
                        <option value="false">False</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-10 mb-4">
                  <div className="flex flex-col">
                    <label htmlFor="lens_width" className="text-sm mb-2">
                      Lens Width
                    </label>
                    <input
                      id="lens_width"
                      type="text"
                      className="border p-2 rounded-md w-full outline-none text-sm"
                      autoComplete="off"
                      value={productBasicInformation.lens_width}
                      onChange={(e) =>
                        setProductBasicInformation((prevInformation) => ({
                          ...prevInformation,
                          lens_width: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="lens_height" className="text-sm mb-2">
                      Lens Height
                    </label>
                    <input
                      id="lens_height"
                      type="text"
                      className="border p-2 rounded-md w-full outline-none text-sm"
                      autoComplete="off"
                      value={productBasicInformation.lens_height}
                      onChange={(e) =>
                        setProductBasicInformation((prevInformation) => ({
                          ...prevInformation,
                          lens_height: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="total_width" className="text-sm mb-2">
                      Total Width
                    </label>
                    <input
                      id="total_width"
                      type="text"
                      className="border p-2 rounded-md w-full outline-none text-sm"
                      autoComplete="off"
                      value={productBasicInformation.total_width}
                      onChange={(e) =>
                        setProductBasicInformation((prevInformation) => ({
                          ...prevInformation,
                          total_width: e.target.value,
                        }))
                      }
                    />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-10 mb-4">
                  <div className="flex flex-col">
                    <label htmlFor="temple_length" className="text-sm mb-2">
                      Template Length
                    </label>
                    <input
                      id="temple_length"
                      type="text"
                      className="border p-2 rounded-md w-full outline-none text-sm"
                      autoComplete="off"
                      value={productBasicInformation.temple_length}
                      onChange={(e) =>
                        setProductBasicInformation((prevInformation) => ({
                          ...prevInformation,
                          temple_length: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="bridge_width" className="text-sm mb-2">
                      Bridge Width
                    </label>
                    <input
                      id="bridge_width"
                      type="text"
                      className="border p-2 rounded-md w-full outline-none text-sm"
                      autoComplete="off"
                      value={productBasicInformation.bridge_width}
                      onChange={(e) =>
                        setProductBasicInformation((prevInformation) => ({
                          ...prevInformation,
                          bridge_width: e.target.value,
                        }))
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white border shadow mb-10 rounded-lg">
              <div className="pl-4 py-4">
                <p>Variants</p>
              </div>
              <div
                className={`${AddProductsStyles["line-height"]} bg-slate-100`}
              ></div>
              <div className="px-5 py-5">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {productFrameColors.map((color, index) => (
                    <div key={index} className="flex gap-5 mb-5">
                      <input
                        id={`image-${index}`}
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={(event) =>
                          handleImageChangeMultiple(
                            color,
                            0,
                            event.target.files
                          )
                        }
                        className="hidden"
                      ></input>
                      <label
                        htmlFor={`image-${index}`}
                        className="flex justify-center items-center w-24 h-24 border-2 border-dotted rounded-md cursor-pointer"
                      >
                        <img
                          loading="lazy"
                          className="w-16 h-16 object-contain"
                          src={SelectImageIcon}
                          alt="select image"
                        />
                      </label>
                      <div>
                        <div className="text-lg">{color}</div>
                        <div className="flex flex-col gap-2 mt-3">
                          <label htmlFor="color_quantity" className="text-xs">
                            Quantity
                          </label>
                          <input
                            id="color_quantity"
                            type="text"
                            className="border p-1 rounded-md w-20 outline-none text-sm"
                            autoComplete="off"
                            value={handleProductVariantQuantity(color)}
                            onChange={(event) => {
                              const updatedVariant =
                                productVariantsMultiple.map((variant) =>
                                  variant.color === color
                                    ? {
                                        ...variant,
                                        quantity: event.target.value,
                                      }
                                    : variant
                                );
                              setProductVariantsMultiple(updatedVariant);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-10">
                  {productVariantsMultiple.map((variant, index) => (
                    <div key={index} className="mb-5">
                      <div className="flex flex-col mb-3">
                        <span className="text-lg">{variant.color}</span>
                        <span className="text-xs">
                          Quantity: {variant.quantity}
                        </span>
                      </div>
                      <div className="items-start grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {variant.images.map(
                          (productVariantImage, imageIndex) => (
                            <div key={imageIndex} className="border h-auto">
                              <div className="border-b">
                                <div className="cursor-pointer">
                                  <img
                                    className="object-contain"
                                    src={URL.createObjectURL(
                                      productVariantImage
                                    )}
                                    alt="product"
                                  />
                                </div>
                              </div>
                              <div className="flex justify-between items-center py-2 px-5">
                                <AiOutlineStar
                                  size={20}
                                  className="cursor-pointer"
                                />
                                <BsTrash
                                  size={20}
                                  className="text-danger-900 cursor-pointer"
                                />
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* this is right side */}
          <div className="flex flex-col w-full md:w-2/6">
            <div className="bg-white border shadow mb-10 rounded-lg">
              <Pricing
                productPricing={productPricing}
                updateProductPricing={updateProductPricing}
              />
            </div>
            <div className="bg-white border shadow mb-10 rounded-lg">
              <Categories
                selectedCategories={productCategories}
                updateSelectedCategories={updatedProductCategories}
              />
            </div>
            <div className="bg-white border shadow mb-10 rounded-lg">
              <FrameMaterial
                selectedFrameMaterials={productFrameMaterials}
                updateSelectedFrameMaterials={updatedProductFrameMaterials}
              />
            </div>
            <div className="bg-white border shadow mb-10 rounded-lg">
              <FrameSize
                selectedFrameSizes={productFrameSizes}
                updateSelectedFrameSizes={updatedSelectedFrameSize}
              />
            </div>
            <div className="bg-white border shadow mb-10 rounded-lg">
              <FaceShape
                selectedFrameFaceShape={productFrameFaceShape}
                updateSelectedFrameFaceShape={updatedSelectedFrameFaceShape}
              />
            </div>
            <div className="bg-white border shadow mb-10 rounded-lg">
              <Gender
                selectedFrameGender={productFrameGender}
                updateSelectedFrameGender={updatedSelectedFrameGenders}
              />
            </div>
            <div className="bg-white border shadow mb-10 rounded-lg">
              <FrameColors
                selectedFrameColors={productFrameColors}
                updateSelectedFrameColors={updatedSelectedFrameColors}
              />
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
                    id="in_stock"
                    value="in_stock"
                    checked={
                      productBasicInformation.stock_status === "in_stock"
                    }
                    onChange={handleStockStatus}
                    className="mr-4 cursor-pointer"
                  />
                  <label htmlFor="in_stock" className="mr-4 cursor-pointer">
                    In stock
                  </label>
                </div>
                <div className="cursor-pointer mb-3">
                  <input
                    type="radio"
                    id="out_of_stock"
                    value="out_of_stock"
                    checked={
                      productBasicInformation.stock_status === "out_of_stock"
                    }
                    onChange={handleStockStatus}
                    className="mr-4 cursor-pointer"
                  />
                  <label htmlFor="out_of_stock" className="mr-4 cursor-pointer">
                    Out of stock
                  </label>
                </div>
                <div className="cursor-pointer mb-3">
                  <input
                    type="radio"
                    id="to_be_announced"
                    value="to_be_announced"
                    checked={
                      productBasicInformation.stock_status === "to_be_announced"
                    }
                    onChange={handleStockStatus}
                    className="mr-4 cursor-pointer"
                  />
                  <label
                    htmlFor="to_be_announced"
                    className="mr-4 cursor-pointer"
                  >
                    To be announced
                  </label>
                </div>
                <div className="cursor-pointer mb-3">
                  <input
                    type="radio"
                    id="low_stock"
                    value="low_stock"
                    checked={
                      productBasicInformation.stock_status === "low_stock"
                    }
                    onChange={handleStockStatus}
                    className="mr-4 cursor-pointer"
                  />
                  <label htmlFor="low_stock" className="mr-4 cursor-pointer">
                    Low stock
                  </label>
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
