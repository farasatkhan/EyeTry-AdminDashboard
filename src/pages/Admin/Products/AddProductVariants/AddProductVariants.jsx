import React, { useState } from "react";
import { Link } from "react-router-dom";

import { newProduct } from "../../../../services/Products/glasses";

import FrameColors from "../../../../components/ui/Admin/AddProduct/FrameColors";
import Variants from "../../../../components/ui/Admin/AddProduct/Variants/Variants";

const AddProductVariants = () => {
  const [productFrameColors, setProductFrameColors] = useState([]);

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

  const handleSubmittedProducts = async (e) => {
    e.preventDefault();

    const productInformation = {
      ...productBasicInformation,
      ...productPricing,
      ...metaDetails,
      ...productLensInformation,
      categories: [...productCategories],
      frame_material: [...productFrameMaterials],
      frame_size: [...productFrameSizes],
      face_shape: [...productFrameFaceShape],
      genders: [...productFrameGender],
      stock_status: stockStatus,
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
            <Link to="/products/new">
              <button className="w-full md:w-36 h-10 rounded-md text-white focus:outline-none bg-white border">
                <p className="text-black">Go Back</p>
              </button>
            </Link>
          </div>
          <div className="flex w-full">
            <button className="w-full md:w-36 h-10 rounded-md text-white focus:outline-none bg-white border">
              <p className="text-black">Publish</p>
            </button>
          </div>
        </div>
      </div>
      <div className={`h-0.5 bg-slate-100 ml-7 mr-7 mt-7`}></div>
      <div className="flex mx-5 mt-5">
        <form
          onSubmit={handleSubmittedProducts}
          className="flex flex-col md:flex-row flex-grow gap-10"
        >
          {/* this is left side */}
          <div className="flex flex-col w-full md:w-4/6">
            <div className="bg-white border shadow mb-10 rounded-lg">
              <Variants productFrameColors={productFrameColors} />
            </div>
          </div>
          {/* this is right side */}
          <div className="flex flex-col w-full md:w-2/6">
            <div className="bg-white border shadow mb-10 rounded-lg">
              <FrameColors
                selectedFrameColors={productFrameColors}
                updateSelectedFrameColors={updatedSelectedFrameColors}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductVariants;
