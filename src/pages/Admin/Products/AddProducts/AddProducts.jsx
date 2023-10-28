import React, { useState, useEffect } from "react";
import { Link, useFetcher, useParams } from "react-router-dom";

import {
  newProduct,
  viewParticularProduct,
} from "../../../../services/Products/glasses";

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

/*
  Bug: Categories, Frame Material, Frame Size, Face Shape, and gender when updated is not working
*/

const AddProducts = () => {
  const { glassesId } = useParams();

  const [productBasicInformation, setProductBasicInformation] = useState({
    name: "",
    sku: "",
    description: "",
    manufacturer: "",
    type: "",
    sku_model: "",
    frame_shape: "",
    rim_shape: "",
  });

  const [productBasicInformationError, setProductBasicInformationError] =
    useState("");

  useEffect(() => {
    if (
      productBasicInformation.name &&
      productBasicInformation.sku &&
      productBasicInformation.description &&
      productBasicInformation.manufacturer &&
      productBasicInformation.type &&
      productBasicInformation.sku_model &&
      productBasicInformation.frame_shape &&
      productBasicInformation.rim_shape
    ) {
      setProductBasicInformationError("");
      return;
    }
  }, [productBasicInformation]);

  const [productLensInformation, setProductLensInformation] = useState({
    measurement_type: "",
    lens_width: 0,
    lens_height: 0,
    total_width: 0,
    bridge_width: 0,
    temple_length: 0,
    is_multifocal: false,
  });

  const [productLensError, setProductLensError] = useState("");

  useEffect(() => {
    if (
      productLensInformation.measurement_type &&
      productLensInformation.lens_width &&
      productLensInformation.lens_height &&
      productLensInformation.total_width &&
      productLensInformation.bridge_width &&
      productLensInformation.temple_length &&
      productLensInformation.is_multifocal
    ) {
      setProductLensError("");
      return;
    }
  }, [productLensInformation]);

  const [stockStatus, setStockStatus] = useState("");

  const [stockStatusError, setStockStatusError] = useState("");

  useEffect(() => {
    if (stockStatus) {
      setStockStatusError("");
      return;
    }
  }, [stockStatus]);

  const [metaDetails, setMetaDetails] = useState({
    meta_title: "",
    meta_keywords: "",
    meta_description: "",
  });

  const [metaDetailsError, setMetaDetailsError] = useState("");

  useEffect(() => {
    if (
      metaDetails.meta_title &&
      metaDetails.meta_keywords &&
      metaDetails.meta_description
    ) {
      setMetaDetailsError("");
      return;
    }
  }, [metaDetails]);

  useEffect(() => {
    console.log(metaDetails);
  }, [metaDetails]);

  const [productPricing, setProductPricing] = useState({
    price: 0,
    currency: "USD",
    discount: 0.0,
  });

  const [productPricingError, setProductPricingError] = useState("");

  useEffect(() => {
    if (productPricing.price && productPricing.currency) {
      setProductPricingError("");
      return;
    }
  }, [productPricing]);

  const [productCategories, setProductCategories] = useState([
    "Men",
    "Women",
    "Kids",
  ]);

  const [productCategoriesError, setProductCategoriesError] = useState("");

  useEffect(() => {
    if (productCategories.length > 0) {
      setProductCategoriesError("");
      return;
    }
  }, [productCategories]);

  const [productFrameMaterials, setProductFrameMaterials] = useState([
    "Acetate",
    "Metal",
    "TR-90",
  ]);

  const [productFrameMaterialsError, setProductFrameMaterialsError] =
    useState("");

  useEffect(() => {
    if (productFrameMaterials.length > 0) {
      setProductFrameMaterialsError("");
      return;
    }
  }, [productFrameMaterials]);

  const [productFrameSizes, setProductFrameSizes] = useState([
    "Small",
    "Medium",
    "Large",
  ]);

  const [productFrameSizesError, setProductFrameSizesError] = useState("");

  useEffect(() => {
    if (productFrameSizes.length > 0) {
      setProductFrameSizesError("");
      return;
    }
  }, [productFrameSizes]);

  const [productFrameFaceShape, setProductFrameFaceShape] = useState([
    "Round Face",
    "Square Face",
    "Oval Face",
    "Heart-shaped Face",
    "Diamond Face",
    "Rectangle/Long Face",
  ]);

  const [productFrameFaceShapeError, setProductFrameFaceShapeError] =
    useState("");

  useEffect(() => {
    if (productFrameFaceShape.length > 0) {
      setProductFrameFaceShapeError("");
      return;
    }
  }, [productFrameFaceShape]);

  const [productFrameGender, setProductFrameGender] = useState([
    "Male",
    "Female",
    "Kids",
  ]);

  const [productFrameGenderError, setProductFrameGenderError] = useState("");

  useEffect(() => {
    if (productFrameGender.length > 0) {
      setProductFrameGenderError("");
      return;
    }
  }, [productFrameGender]);

  const [productFrameColors, setProductFrameColors] = useState([]);

  const [responseGlassesId, setResponseGlassesId] = useState(null);

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
    console.log(checked);
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

    if (
      !productBasicInformation.name ||
      !productBasicInformation.sku ||
      !productBasicInformation.description ||
      !productBasicInformation.manufacturer ||
      !productBasicInformation.type ||
      !productBasicInformation.sku_model ||
      !productBasicInformation.frame_shape ||
      !productBasicInformation.rim_shape
    ) {
      setProductBasicInformationError("Please fill out all required fields.");
      return;
    }

    if (
      !metaDetails.meta_title ||
      !metaDetails.meta_keywords ||
      !metaDetails.meta_description
    ) {
      setMetaDetailsError("Please fill out all required fields.");
      return;
    }

    if (
      !productLensInformation.measurement_type ||
      !productLensInformation.lens_width ||
      !productLensInformation.lens_height ||
      !productLensInformation.total_width ||
      !productLensInformation.bridge_width ||
      !productLensInformation.temple_length ||
      !productLensInformation.is_multifocal
    ) {
      setProductLensError("Please fill out all required fields.");
      return;
    }

    if (!productPricing.price || !productPricing.currency) {
      setProductPricingError("Please fill out all required fields.");
      return;
    }

    if (productCategories.length === 0) {
      setProductCategoriesError("Select atleast one category.");
      return;
    }

    if (productFrameMaterials.length === 0) {
      setProductFrameMaterialsError("Select atleast one frame material.");
      return;
    }

    if (productFrameSizes.length === 0) {
      setProductFrameSizesError("Select atleast one frame size.");
      return;
    }

    if (productFrameFaceShape.length === 0) {
      setProductFrameFaceShapeError("Select atleast one face shape.");
      return;
    }

    if (productFrameGender.length === 0) {
      setProductFrameGenderError("Select atleast one frame gender category.");
      return;
    }

    if (!stockStatus) {
      setStockStatusError("Select one from the following.");
      return;
    }

    console.log("product categories are: ", productCategories);

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
    };

    try {
      if (glassesId) {
        const updatedProductInformation = await updateProduct(
          glassesId,
          productInformation
        );

        if (updatedProductInformation.status === 200) {
          setGiftcardChangeStatus((oldStatus) => ({
            ...oldStatus,
            status: updatedProductInformation.data.message,
          }));
        }
        setResponseGlassesId(glassesId);
      } else {
        const addNewProduct = await newProduct(productInformation);
        console.log("Product added successfully!", addNewProduct);
        setResponseGlassesId(addNewProduct.data.GlassesId);
      }
    } catch (error) {
      console.error("Failed to add product:", error);
    }
  };

  useEffect(() => {
    if (glassesId) {
      try {
        async function fetchData() {
          const fetchedGlasses = await viewParticularProduct(glassesId);

          // set all the products after you get data from the db
          setProductBasicInformation({
            name: fetchedGlasses.name,
            sku: fetchedGlasses.sku,
            description: fetchedGlasses.description,
            manufacturer: fetchedGlasses.manufacturer,
            type: fetchedGlasses.type,
            sku_model: fetchedGlasses.sku_model,
            frame_shape: fetchedGlasses.frame_shape,
            rim_shape: fetchedGlasses.rim_shape,
          });

          setProductLensInformation(fetchedGlasses.lens_information);

          setMetaDetails(fetchedGlasses.meta);

          setProductPricing({
            price: fetchedGlasses.priceInfo.price,
            currency: fetchedGlasses.priceInfo.currency,
            discount: fetchedGlasses.discount,
          });

          if (fetchedGlasses.stock.is_in_stock) {
            setStockStatus("in_stock");
          } else if (fetchedGlasses.stock.is_low_stock) {
            setStockStatus("low_stock");
          } else if (fetchedGlasses.stock.is_out_of_stock) {
            setStockStatus("out_of_stock");
          } else if (fetchedGlasses.stock.is_to_be_announced) {
            setStockStatus("to_be_announced");
          }

          console.log(fetchedGlasses.categories);

          setProductCategories(fetchedGlasses.categories);

          setProductFrameMaterials(
            fetchedGlasses.frame_information.frame_material
          );

          setProductFrameSizes(fetchedGlasses.frame_information.frame_size);

          setProductFrameFaceShape(
            fetchedGlasses.person_information.face_shape
          );

          setProductFrameGender(fetchedGlasses.person_information.genders);
        }
        fetchData();
      } catch (error) {
        console.log("error getting particular glasses.");
      }
    }
  }, [glassesId]);

  useEffect(() => {
    setResponseGlassesId(glassesId);
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
            {responseGlassesId && (
              <Link to={`/products/${responseGlassesId}/variant/`}>
                <button className="w-full md:w-36 h-10 rounded-md text-white focus:outline-none bg-white border">
                  <p className="text-black">Next</p>
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
      {/* <div className={`h-0.5 bg-slate-100 ml-7 mr-7 mt-7`}></div> */}
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
                productError={productBasicInformationError}
              />
            </div>
            <div className="bg-white border shadow mb-10 rounded-lg">
              <MetaDetails
                metaDetails={metaDetails}
                updateMetaDetails={updateProductMetaDetails}
                metaError={metaDetailsError}
              />
            </div>
            <div className="bg-white border shadow mb-10 rounded-lg">
              <LensInformation
                lensInformation={productLensInformation}
                updateLensInformation={updateLensInformation}
                lensError={productLensError}
              />
            </div>
            {/* <div className="bg-white border shadow mb-10 rounded-lg">
              <Variants productFrameColors={productFrameColors} />
            </div> */}
            <div className="flex justify-end">
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
              <Pricing
                productPricing={productPricing}
                updateProductPricing={updateProductPricing}
                pricingError={productPricingError}
              />
            </div>
            <div className="bg-white border shadow mb-10 rounded-lg">
              <Categories
                selectedCategories={productCategories}
                updateSelectedCategories={updatedProductCategories}
                categoriesError={productCategoriesError}
              />
            </div>
            <div className="bg-white border shadow mb-10 rounded-lg">
              <FrameMaterial
                selectedFrameMaterials={productFrameMaterials}
                updateSelectedFrameMaterials={updatedProductFrameMaterials}
                materialError={productFrameMaterialsError}
              />
            </div>
            <div className="bg-white border shadow mb-10 rounded-lg">
              <FrameSize
                selectedFrameSizes={productFrameSizes}
                updateSelectedFrameSizes={updatedSelectedFrameSize}
                sizeError={productFrameSizesError}
              />
            </div>
            <div className="bg-white border shadow mb-10 rounded-lg">
              <FaceShape
                selectedFrameFaceShape={productFrameFaceShape}
                updateSelectedFrameFaceShape={updatedSelectedFrameFaceShape}
                shapeError={productFrameFaceShapeError}
              />
            </div>
            <div className="bg-white border shadow mb-10 rounded-lg">
              <Gender
                selectedFrameGender={productFrameGender}
                updateSelectedFrameGender={updatedSelectedFrameGenders}
                genderError={productFrameGenderError}
              />
            </div>
            {/* <div className="bg-white border shadow mb-10 rounded-lg">
              <FrameColors
                selectedFrameColors={productFrameColors}
                updateSelectedFrameColors={updatedSelectedFrameColors}
              />
            </div> */}
            <div className="bg-white border shadow mb-10 rounded-lg">
              <StockStatus
                currentStockStatus={stockStatus}
                updateStockStatus={updateStockStatus}
                stockStatusError={stockStatusError}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
