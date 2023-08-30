import React, { useState } from "react";

import { newProduct } from "../../../../services/Products/glasses";

import AddProductsStyles from "./AddProducts.module.css";

import ProductImage from "../../../../assets/images/products/product_4.jfif";
import ProductBasketImage from "../../../../assets/images/images-basket.png";

import SelectImageIcon from "../../../../assets/icons/select_image.svg";

import { BsTrash, BsX } from "react-icons/bs";
import { AiOutlineEye, AiOutlineStar, AiFillStar } from "react-icons/ai";
import { newCategory } from "../../../../services/Products/categories";
import Pricing from "../../../../components/ui/Admin/AddProduct/Pricing/Pricing";
import Categories from "../../../../components/ui/Admin/AddProduct/Categories/Categories";
import FrameMaterial from "../../../../components/ui/Admin/AddProduct/FrameMaterial/FrameMaterial";

const AddProducts = () => {
  const [ProductType, setProductType] = useState([
    "Sunglasses",
    "Eyeglasses",
    "Lens",
  ]);

  const [faceShapeList, setFaceShapeList] = useState([
    "Round Face",
    "Square Face",
    "Oval Face",
    "Heart-shaped Face",
    "Diamond Face",
    "Rectangle/Long Face",
  ]);

  const [gendersList, setGendersList] = useState(["Male", "Female", "Kids"]);
  const [colorsList, setColorsList] = useState(["Black", "White", "Metallic"]);

  const [frameSizeList, setFrameSizeList] = useState([
    "Small",
    "Medium",
    "Large",
  ]);

  const [newFrameSize, setNewFrameSize] = useState("");

  const [viewToggle, setViewToggle] = useState({
    category: false,
    frame_size: false,
    face_shape: false,
    genders: false,
    colors: false,
  });

  // Submitting Product //

  const [productBasicInformation, setProductBasicInformation] = useState({
    name: "",
    sku: "",
    description: "",
    manufacturer: "",
    type: "",
    meta_title: "",
    meta_keywords: "",
    meta_description: "",
    frame_size: [],
    measurement_type: "",
    lens_width: 0,
    lens_height: 0,
    total_width: 0,
    bridge_width: 0,
    temple_length: 0,
    is_multifocal: false,
    face_shape: [],
    genders: [],
    stock_status: "",
    colors: [],
  });

  const [productPricing, setProductPricing] = useState({
    price: 0,
    currency: "",
    discount: 0,
  });

  const updateProductPricing = (updatedPriceInformation) => {
    setProductPricing({
      price: updatedPriceInformation.price,
      currency: updatedPriceInformation.currency,
      discount: updatedPriceInformation.discount,
    });
  };

  const [productCategories, setProductCategories] = useState([]);

  const updateProductCategories = (updatedCategory, checked) => {
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

  const [productFrameMaterials, setProductFrameMaterials] = useState([]);

  const updatedProductFrameMaterials = (updatedMaterial, checked) => {
    const updatedFrameMaterials = () => {
      if (checked) {
        return [...productFrameMaterials, updatedMaterial];
      } else {
        return productFrameMaterials.filter(
          (category) => category !== updatedMaterial
        );
      }
    };
    setProductFrameMaterials(updatedFrameMaterials());
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
      categories: [...productCategories],
      frame_material: [...productFrameMaterials],
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

  const handleSelectedFrameSizes = async (event) => {
    const value = event.target.labels[0].textContent;

    const updatedFrameSizes = () => {
      if (event.target.checked) {
        return [...productBasicInformation.frame_size, value];
      } else {
        return productBasicInformation.frame_size.filter(
          (frame_size) => frame_size !== value
        );
      }
    };

    setProductBasicInformation((prevInformation) => ({
      ...prevInformation,
      frame_size: updatedFrameSizes(),
    }));

    console.log("selected frame sizes: ", productBasicInformation.frame_size);
  };

  const handleSelectedFaceShapes = async (event) => {
    const value = event.target.labels[0].textContent;

    const updatedFaceShapes = () => {
      if (event.target.checked) {
        return [...productBasicInformation.face_shape, value];
      } else {
        return productBasicInformation.face_shape.filter(
          (face_shape) => face_shape !== value
        );
      }
    };

    setProductBasicInformation((prevInformation) => ({
      ...prevInformation,
      face_shape: updatedFaceShapes(),
    }));

    console.log("selected face shapes: ", productBasicInformation.face_shape);
  };

  const handleSelectedGenders = async (event) => {
    const value = event.target.labels[0].textContent;

    const updatedGenders = () => {
      if (event.target.checked) {
        return [...productBasicInformation.genders, value];
      } else {
        return productBasicInformation.genders.filter(
          (genders) => genders !== value
        );
      }
    };

    setProductBasicInformation((prevInformation) => ({
      ...prevInformation,
      genders: updatedGenders(),
    }));

    console.log("selected genders: ", productBasicInformation.genders);
  };

  const handleSelectedColors = async (event) => {
    const value = event.target.labels[0].textContent;

    const updatedColors = () => {
      if (event.target.checked) {
        return [...productBasicInformation.colors, value];
      } else {
        return productBasicInformation.colors.filter(
          (colors) => colors !== value
        );
      }
    };

    setProductBasicInformation((prevInformation) => ({
      ...prevInformation,
      colors: updatedColors(),
    }));

    console.log("selected genders: ", productBasicInformation.genders);
  };

  const [addCategory, setAddCategory] = useState("");
  const [addNewFrameSize, setAddNewFrameSize] = useState("");
  const [addNewFaceShape, setAddNewFaceShape] = useState("");
  const [addNewGender, setAddNewGender] = useState("");
  const [addNewColor, setAddNewColor] = useState("");

  const handleSubmittedFaceShape = async () => {
    if (!faceShapeList.includes(addNewFaceShape)) {
      setFaceShapeList((prevFaceShapeList) => [
        ...prevFaceShapeList,
        addNewFaceShape,
      ]);
    } else {
      console.log("Face shape is already present.");
    }
  };

  const handleSubmittedGenders = async () => {
    if (!gendersList.includes(addNewGender)) {
      setGendersList((prevGenders) => [...prevGenders, addNewGender]);
    } else {
      console.log("gender is already present.");
    }
  };

  const handleSubmittedColor = async () => {
    if (!colorsList.includes(addNewColor)) {
      setColorsList((prevColors) => [...prevColors, addNewColor]);
    } else {
      console.log("color is already present.");
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
                {/* <div className="flex justify-between gap-5 mb-4">
                  <div className="flex flex-col">
                    <label htmlFor="lens_width" className="text-sm mb-1">
                      Lens Width
                    </label>
                    <input
                      id="lens_width"
                      type="text"
                      className="border p-2 rounded-md w-full outline-none text-sm"
                      autoComplete="off"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="lens_width" className="text-sm mb-1">
                      Lens Width
                    </label>
                    <input
                      id="lens_width"
                      type="text"
                      className="border p-2 rounded-md w-full outline-none text-sm"
                      autoComplete="off"
                    />
                  </div>
                </div> */}
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
                  {productBasicInformation.colors.map((color, index) => (
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
            {/* <div className="bg-white border shadow mb-10 rounded-lg">
              <div className="pl-4 py-4">
                <p>Variants</p>
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
            </div> */}
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
                updateSelectedCategories={updateProductCategories}
              />
            </div>
            <div className="bg-white border shadow mb-10 rounded-lg">
              <FrameMaterial
                selectedFrameMaterials={productFrameMaterials}
                updateSelectedFrameMaterials={updatedProductFrameMaterials}
              />
              {/* <div className="pl-4 py-4">
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
                          onChange={handleSelectedFrameMaterials}
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
              </div> */}
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
                          onChange={handleSelectedFrameSizes}
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
                <p>Face Shape</p>
              </div>
              <div
                className={`${AddProductsStyles["line-height"]} bg-slate-100`}
              ></div>
              <div className="px-5 py-5">
                <div className="flex flex-col border-y border-slate-100 mb-4 max-h-40 overflow-y-auto">
                  {faceShapeList.map((faceShape, index) => (
                    <div key={index} className="flex justify-between pr-5">
                      <div className="flex py-2 gap-3 justify-start items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="w-5 h-5 cursor-pointer"
                          id={`faceShape-${index}`}
                          onChange={handleSelectedFaceShapes}
                        />
                        <label
                          htmlFor={`faceShape-${index}`}
                          className="cursor-pointer"
                        >
                          {faceShape}
                        </label>
                      </div>
                      <div
                        className="flex justify-center items-center cursor-pointer"
                        onClick={() => {
                          setFaceShapeList(
                            faceShapeList.filter((shape) => shape !== faceShape)
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
                        face_shape: !viewToggle.face_shape,
                      })
                    }
                  >
                    <span className="text-sm">Add a new face shape</span>
                  </div>
                  <div
                    className={`${
                      viewToggle.face_shape ? "block" : "hidden"
                    } mt-4`}
                  >
                    <label htmlFor="face_shape" className="text-sm">
                      New face shape
                    </label>
                    <input
                      id="face_shape"
                      type="text"
                      className="w-full p-2 border outline-none text-sm mt-2"
                      value={addNewFaceShape}
                      onChange={(e) => setAddNewFaceShape(e.target.value)}
                    />
                    <div className="mt-2">
                      <div
                        className="flex justify-center items-center w-full py-2 border bg-blue-500 cursor-pointer"
                        onClick={handleSubmittedFaceShape}
                      >
                        <span className="text-center text-sm text-white">
                          Add New Face Shape
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white border shadow mb-10 rounded-lg">
              <div className="pl-4 py-4">
                <p>Genders</p>
              </div>
              <div
                className={`${AddProductsStyles["line-height"]} bg-slate-100`}
              ></div>
              <div className="px-5 py-5">
                <div className="flex flex-col border-y border-slate-100 mb-4 max-h-40 overflow-y-auto">
                  {gendersList.map((gender, index) => (
                    <div key={index} className="flex justify-between pr-5">
                      <div className="flex py-2 gap-3 justify-start items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="w-5 h-5 cursor-pointer"
                          id={`gender-${index}`}
                          onChange={handleSelectedGenders}
                        />
                        <label
                          htmlFor={`gender-${index}`}
                          className="cursor-pointer"
                        >
                          {gender}
                        </label>
                      </div>
                      <div
                        className="flex justify-center items-center cursor-pointer"
                        onClick={() => {
                          setGendersList(
                            gendersList.filter((genders) => genders !== gender)
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
                        genders: !viewToggle.genders,
                      })
                    }
                  >
                    <span className="text-sm">Add a new gender type</span>
                  </div>
                  <div
                    className={`${
                      viewToggle.genders ? "block" : "hidden"
                    } mt-4`}
                  >
                    <label htmlFor="gender_type" className="text-sm">
                      New gender
                    </label>
                    <input
                      id="gender_type"
                      type="text"
                      className="w-full p-2 border outline-none text-sm mt-2"
                      value={addNewGender}
                      onChange={(e) => setAddNewGender(e.target.value)}
                    />
                    <div className="mt-2">
                      <div
                        className="flex justify-center items-center w-full py-2 border bg-blue-500 cursor-pointer"
                        onClick={handleSubmittedGenders}
                      >
                        <span className="text-center text-sm text-white">
                          Add New Gender
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white border shadow mb-10 rounded-lg">
              <div className="pl-4 py-4">
                <p>Colors</p>
              </div>
              <div
                className={`${AddProductsStyles["line-height"]} bg-slate-100`}
              ></div>
              <div className="px-5 py-5">
                <div className="flex flex-col border-y border-slate-100 mb-4 max-h-40 overflow-y-auto">
                  {colorsList.map((color, index) => (
                    <div key={index} className="flex justify-between pr-5">
                      <div className="flex py-2 gap-3 justify-start items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="w-5 h-5 cursor-pointer"
                          id={`color-${index}`}
                          onChange={handleSelectedColors}
                        />
                        <label
                          htmlFor={`color-${index}`}
                          className="cursor-pointer"
                        >
                          {color}
                        </label>
                      </div>
                      <div
                        className="flex justify-center items-center cursor-pointer"
                        onClick={() => {
                          setColorsList(
                            colorsList.filter((colors) => colors !== color)
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
                        colors: !viewToggle.colors,
                      })
                    }
                  >
                    <span className="text-sm">Add a new color</span>
                  </div>
                  <div
                    className={`${viewToggle.colors ? "block" : "hidden"} mt-4`}
                  >
                    <label htmlFor="color_type" className="text-sm">
                      New color
                    </label>
                    <input
                      id="color_type"
                      type="text"
                      className="w-full p-2 border outline-none text-sm mt-2"
                      value={addNewColor}
                      onChange={(e) => setAddNewColor(e.target.value)}
                    />
                    <div className="mt-2">
                      <div
                        className="flex justify-center items-center w-full py-2 border bg-blue-500 cursor-pointer"
                        onClick={handleSubmittedColor}
                      >
                        <span className="text-center text-sm text-white">
                          Add New Color
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
            {/* <div className="bg-white border shadow mb-10 rounded-lg">
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
            </div> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
