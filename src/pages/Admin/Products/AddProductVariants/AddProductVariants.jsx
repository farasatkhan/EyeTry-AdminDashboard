import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link, useParams } from "react-router-dom";

import { addProductImages } from "../../../../services/Products/glasses";

import FrameColors from "../../../../components/ui/Admin/AddProduct/FrameColors";
import Variants from "../../../../components/ui/Admin/AddProduct/Variants/Variants";

import { viewParticularProduct } from "../../../../services/Products/glasses";

import API_URL from "../../../../config/config";

const AddProductVariants = () => {
  const navigate = useNavigate();

  const redirectToProductsPage = () => {
    navigate("/products/view");
  };

  const { glassesId } = useParams();

  const [productFrameColors, setProductFrameColors] = useState([
    "Black",
    "White",
    "Metallic",
  ]);

  // useEffect(() => {
  //   const variants = [];
  //   productFrameColors.map((color, index) => {
  //     const newVariant = {
  //       color: color,
  //       quantity: 0,
  //       image_count: 0,
  //       images: [{}],
  //     };
  //     variants.push(newVariant);
  //   });
  //   setProductVaraint(variants);
  // }, [productFrameColors]);

  const [productFrameColorsError, setProductFrameColorsError] = useState("");

  useEffect(() => {
    if (productFrameColors.length > 0) {
      setProductFrameColorsError("");
      return;
    }
  }, [productFrameColors]);

  const [productVariant, setProductVaraint] = useState([]);

  const [disableCreateProduct, setDisableCreateProduct] = useState(true);

  useEffect(() => {
    const isEveryVariantImagePresent = productVariant.every((variant) => {
      return variant.images && variant.images.length > 0;
    });

    if (
      productFrameColors.length === productVariant.length &&
      productVariant.length > 0 &&
      isEveryVariantImagePresent
    ) {
      setDisableCreateProduct(false);
    } else {
      setDisableCreateProduct(true);
    }
  }, [productVariant, productFrameColors]);

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

  const [variantStatus, setVariantStatus] = useState({
    status: "",
    error: "",
  });

  const handleSubmittedProductsVariant = async (e) => {
    e.preventDefault();

    if (productFrameColors.length === 0) {
      setProductFrameColorsError("Select atleast one color.");
      return;
    }

    const isValidQuantity = productVariant.every((variant) => {
      return variant.quantity > 0;
    });

    if (!isValidQuantity) {
      setVariantStatus((oldStatus) => ({
        status: "",
        error: "Each Variant must have quantity greater than 0.",
      }));
      return;
    }

    const isColorCodePresent = productVariant.every((variant) => {
      return variant.color_code && variant.color_code[0] === "#";
    });

    if (!isColorCodePresent) {
      setVariantStatus((oldStatus) => ({
        status: "",
        error: "Color Code must be added and should be in the format #fffff.",
      }));
      return;
    }

    setVariantStatus((oldStatus) => ({ status: "", error: "" }));

    const formData = new FormData();

    productVariant.forEach((variant, index) => {
      formData.append(`color`, variant.color);
      formData.append(`color_code`, variant.color_code);
      formData.append(`quantity`, variant.quantity);
      formData.append(`image_count`, variant.image_count);
      variant.images.forEach((image, imageIndex) => {
        formData.append("product_images", image);
      });
    });

    try {
      const addProductImagesResponse = await addProductImages(
        glassesId,
        formData
      );
      redirectToProductsPage();
      console.log("Product added successfully!", addProductImagesResponse);
    } catch (error) {
      console.error("Failed to add product:", error);
    }
  };

  // useEffect(() => {
  //   if (glassesId) {
  //     try {
  //       async function fetchData() {
  //         const fetchedGlasses = await viewParticularProduct(glassesId);

  //         const colors = fetchedGlasses.frame_information.frame_variants.map(
  //           (variant) => variant.color
  //         );

  //         setProductFrameColors(colors);
  //       }
  //       fetchData();
  //     } catch (error) {
  //       console.log("error getting particular glasses.");
  //     }
  //   }
  // }, [glassesId]);

  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    if (glassesId) {
      try {
        async function fetchData() {
          const fetchedGlasses = await viewParticularProduct(glassesId);

          const colors = fetchedGlasses.frame_information.frame_variants.map(
            (variant) => variant.color
          );

          setProductFrameColors(colors);
          // setProductVaraint(fetchedGlasses.frame_information.frame_variants);
          // setFetchedData(fetchedGlasses.frame_information.frame_variants);

          // fetchedVariantsData fetches the information related to the products variants from database
          // and the data is then sent to the variants components which is filled with the data.
          const fetchedVariantsData =
            fetchedGlasses.frame_information.frame_variants;

          // console.log(fetchedVariantsData);

          setFetchedData(
            fetchedVariantsData.map((item) => {
              const { images, _id, ...rest } = item;

              return {
                ...rest,
                image_count: images.length,
                images_urls: images.map(
                  (image) => `${API_URL + image.replace(/\\/g, "/")}`
                ),
              };
            })
          );
        }
        fetchData();
      } catch (error) {
        console.log("error fetching products variants");
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
            <Link to={`/products/${glassesId}/`}>
              <button className="w-full md:w-36 h-10 rounded-md text-white focus:outline-none bg-white border">
                <p className="text-black">Go Back</p>
              </button>
            </Link>
            {/* <Link to="/products/new">
              <button className="w-full md:w-36 h-10 rounded-md text-white focus:outline-none bg-white border">
                <p className="text-black">Go Back</p>
              </button>
            </Link> */}
          </div>
          {/* <div className="flex w-full">
            <button className="w-full md:w-36 h-10 rounded-md text-white focus:outline-none bg-white border">
              <p className="text-black">Publish</p>
            </button>
          </div> */}
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
                fetchedData={fetchedData}
              />
              {variantStatus.error && (
                <div className="flex flex-col justify-center items-center h-10 bg-red-500 rounded-sm my-2 mx-2">
                  <span className="text-white text-sm">
                    {variantStatus.error}
                  </span>
                </div>
              )}
              {variantStatus.status && (
                <div className="flex flex-col justify-center items-center h-10 bg-red-500 rounded-sm my-2 mx-2">
                  <span className="text-white text-sm">
                    {variantStatus.status}
                  </span>
                </div>
              )}
            </div>
            <div className="flex justify-end mb-10">
              <button
                type="submit"
                disabled={disableCreateProduct}
                className={`w-full h-12 md:w-36 md:h-10 rounded-md text-white focus:outline-none ${
                  disableCreateProduct ? "bg-gray-300" : "bg-blue-600"
                }`}
              >
                <p className="">Create Product</p>
              </button>
            </div>
          </div>
          {/* this is right side */}
          <div className="flex flex-col w-full md:w-2/6">
            <div className="bg-white border shadow mb-10 rounded-lg">
              <FrameColors
                selectedFrameColors={productFrameColors}
                updateSelectedFrameColors={updatedSelectedFrameColors}
                colorsError={productFrameColorsError}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductVariants;
