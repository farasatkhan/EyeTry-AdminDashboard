import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { addProductImages } from "../../../../services/Products/glasses";

import FrameColors from "../../../../components/ui/Admin/AddProduct/FrameColors";
import Variants from "../../../../components/ui/Admin/AddProduct/Variants/Variants";

const AddProductVariants = () => {
  const { glassesId } = useParams();

  const [productFrameColors, setProductFrameColors] = useState([
    "Black",
    "White",
    "Metallic",
  ]);

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

  const [productVariant, setProductVaraint] = useState([]);

  const handleSubmittedProductsVariant = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    productVariant.forEach((variant, index) => {
      formData.append(`color`, variant.color);
      formData.append(`quantity`, variant.quantity);
      formData.append(`image_count`, variant.image_count);
      variant.images.forEach((image, imageIndex) => {
        formData.append("product_images", image);
      });
    });

    console.log(productVariant);

    try {
      const addProductImagesResponse = await addProductImages(
        glassesId,
        formData
      );
      console.log("Product added successfully!", addProductImagesResponse);
    } catch (error) {
      console.error("Failed to add product:", error);
    }
  };

  useEffect(() => {
    if (glassesId) {
      try {
        async function fetchData() {
          const fetchedGlasses = await viewParticularProduct(glassesId);
        }
        fetchData();
      } catch (error) {
        console.log("error getting particular glasses.");
      }
    }
  }, [glassesId]);

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
          onSubmit={handleSubmittedProductsVariant}
          className="flex flex-col md:flex-row flex-grow gap-10"
        >
          {/* this is left side */}
          <div className="flex flex-col w-full md:w-4/6">
            <div className="bg-white border shadow mb-10 rounded-lg">
              <Variants
                productFrameColors={productFrameColors}
                updateVariants={setProductVaraint}
              />
            </div>
            <div className="flex justify-end mb-10">
              <button
                type="submit"
                className="w-full h-12 md:w-36 md:h-10 rounded-md text-white focus:outline-none bg-blue-600"
              >
                <p className="">Save Changes</p>
              </button>
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
