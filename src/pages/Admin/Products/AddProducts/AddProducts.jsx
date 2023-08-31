import React, { useState } from "react";

import { newProduct } from "../../../../services/Products/glasses";

import AddProductsStyles from "./AddProducts.module.css";

import Pricing from "../../../../components/ui/Admin/AddProduct/Pricing/Pricing";
import Categories from "../../../../components/ui/Admin/AddProduct/Categories/Categories";
import FrameMaterial from "../../../../components/ui/Admin/AddProduct/FrameMaterial/FrameMaterial";
import FrameSize from "../../../../components/ui/Admin/AddProduct/FrameSize/FrameSize";
import FaceShape from "../../../../components/ui/Admin/AddProduct/FaceShape/FaceShape";
import Gender from "../../../../components/ui/Admin/AddProduct/Gender/Gender";
import FrameColors from "../../../../components/ui/Admin/AddProduct/FrameColors";
import MetaDetails from "../../../../components/ui/Admin/AddProduct/MetaDetails/MetaDetails";
import StockStatus from "../../../../components/ui/Admin/AddProduct/StockStatus/StockStatus";
import LensInformation from "../../../../components/ui/Admin/AddProduct/LensInformation/LensInformation";
import ProductBasicInformation from "../../../../components/ui/Admin/AddProduct/ProductBasicInformation/ProductBasicInformation";
import Variants from "../../../../components/ui/Admin/AddProduct/Variants/Variants";

const AddProducts = () => {
  const [productBasicInformation, setProductBasicInformation] = useState({});
  const [productLensInformation, setProductLensInformation] = useState({});

  const [stockStatus, setStockStatus] = useState("");
  const [metaDetails, setMetaDetails] = useState({});
  const [productPricing, setProductPricing] = useState({});
  const [productCategories, setProductCategories] = useState([]);
  const [productFrameMaterials, setProductFrameMaterials] = useState([]);
  const [productFrameSizes, setProductFrameSizes] = useState([]);
  const [productFrameFaceShape, setProductFrameFaceShape] = useState([]);
  const [productFrameGender, setProductFrameGender] = useState([]);
  const [productFrameColors, setProductFrameColors] = useState([]);

  const updateBasicProductInformation = (updatedInformation) => {
    setProductBasicInformation({ ...updatedInformation });
  };

  const updateLensInformation = (updatedLens) => {
    setProductLensInformation({ ...updatedLens });
  };

  const updateStockStatus = (updatedStockStatus) => {
    setStockStatus(updatedStockStatus);
  };

  const updateProductMetaDetails = (updatedMetaDetails) => {
    setMetaDetails({ ...updatedMetaDetails });
  };

  const updateProductPricing = (updatedPriceInformation) => {
    setProductPricing({ ...updatedPriceInformation });
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
              <ProductBasicInformation
                basicProductInformation={productBasicInformation}
                updateBasicProductInformation={updateBasicProductInformation}
              />
            </div>
            <div className="bg-white border shadow mb-10 rounded-lg">
              <MetaDetails
                metaDetails={metaDetails}
                updateMetaDetails={updateProductMetaDetails}
              />
            </div>
            <div className="bg-white border shadow mb-10 rounded-lg">
              <LensInformation
                lensInformation={productLensInformation}
                updateLensInformation={updateLensInformation}
              />
            </div>
            <div className="bg-white border shadow mb-10 rounded-lg">
              <Variants productFrameColors={productFrameColors} />
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
              <StockStatus
                currentStockStatus={stockStatus}
                updateStockStatus={updateStockStatus}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
