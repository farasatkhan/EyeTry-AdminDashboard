import React, { useEffect, useState, useRef } from "react";

import { BsTrash, BsX } from "react-icons/bs";
import { AiOutlineEye, AiOutlineStar, AiFillStar } from "react-icons/ai";
import { BiSolidErrorCircle } from "react-icons/bi";

import SelectImageIcon from "../../../../../assets/icons/select_image.svg";

import { processImages } from "../../../../../utils/urlToFileObject";

const Variants = ({ productFrameColors, updateVariants, fetchedData }) => {
  const [productVariantsMultiple, setProductVariantsMultiple] = useState([]);

  useEffect(() => {
    const newProductVariantsMultiple = productVariantsMultiple.filter((item) =>
      productFrameColors.includes(item.color)
    );
    setProductVariantsMultiple(newProductVariantsMultiple);
  }, [productFrameColors]);

  useEffect(() => {
    const fetchData = async () => {
      const updatedData = [];
      for (const item of fetchedData) {
        const { images_urls, ...rest } = item;
        const images = await processImages(images_urls);
        updatedData.push({
          ...rest,
          images,
        });
      }

      setProductVariantsMultiple(updatedData);
    };

    fetchData();
  }, [fetchedData]);

  const handleImageChangeMultiple = (color, quantity, images, totalImages) => {
    setProductVariantsMultiple((prevProductVariants) => {
      const updatedVariants = [...prevProductVariants];

      const existingVariantIndex = updatedVariants.findIndex(
        (variant) => variant.color === color
      );

      if (existingVariantIndex !== -1) {
        updatedVariants[existingVariantIndex].images.push(
          ...Array.from(images)
        );
        updatedVariants[existingVariantIndex].quantity = quantity;
        updatedVariants[existingVariantIndex].image_count += totalImages;
      } else {
        const newVariant = {
          color: color,
          quantity: quantity,
          image_count: totalImages,
          images: Array.from(images),
        };

        updatedVariants.push(newVariant);
      }

      return updatedVariants;
    });
  };

  const handleRemovingSelectedImage = (color, imageIndex) => {
    setProductVariantsMultiple((prevVariants) => {
      const updatedVariants = [...prevVariants];
      const variantIndex = updatedVariants.findIndex(
        (variant) => variant.color === color
      );

      if (
        variantIndex !== -1 &&
        imageIndex >= 0 &&
        imageIndex < updatedVariants[variantIndex].images.length
      ) {
        updatedVariants[variantIndex].images.splice(imageIndex, 1);
        updatedVariants[variantIndex].image_count -= 1;
      }

      return updatedVariants;
    });
  };

  const handleProductVariantQuantity = (color) => {
    const variant = productVariantsMultiple.find(
      (variant) => variant.color === color
    );
    const quantity = variant ? variant.quantity : 0;
    return quantity;
  };

  const handleProductVariantColorCode = (color) => {
    const variant = productVariantsMultiple.find(
      (variant) => variant.color === color
    );
    const color_code = variant ? variant.color_code : "";

    return color_code;
  };

  useEffect(() => {
    updateVariants(productVariantsMultiple);
  }, [productVariantsMultiple]);

  const [imagesFormatError, setImageFormatError] = useState("");

  const inputRef = useRef(null);

  const handleOpenFileInput = () => {
    inputRef.current.click();
  };

  return (
    <>
      <div className="pl-4 py-4">
        <p>Variants</p>
      </div>
      <div className={`h-0.5 bg-slate-100`}></div>
      <div className="px-5 py-5">
        <div className="grid grid-cols-1 lg:grid-cols-1">
          {productFrameColors.map((color, index) => (
            <div key={index} className="flex gap-5 mb-5">
              <input
                ref={inputRef}
                name="product_images"
                id={`image-${index}`}
                type="file"
                accept="image/*"
                multiple
                key={Math.random()}
                onChange={(event) => {
                  const selectedFiles = event.target.files;
                  const totalImages = selectedFiles ? selectedFiles.length : 0;
                  // const selectedFiles = event.target.files;
                  // const totalImages = selectedFiles.length;

                  for (let i = 0; i < totalImages; i++) {
                    const file = selectedFiles[i];
                    const fileType = file.type;

                    if (fileType !== "image/jpeg" && fileType !== "image/png") {
                      setImageFormatError(
                        "Invalid file format. Please select only JPEG or PNG images."
                      );
                      return;
                    }
                  }

                  if (totalImages === 0) return;

                  handleImageChangeMultiple(
                    color,
                    0,
                    selectedFiles,
                    totalImages
                  );

                  setImageFormatError("");
                }}
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
                <div className="flex gap-2">
                  <div className="flex flex-col gap-2 mt-3">
                    <label
                      htmlFor={`color_quantity_${color}`}
                      className="text-xs"
                    >
                      Quantity
                    </label>
                    <input
                      id={`color_quantity_${color}`}
                      type="number"
                      min={0}
                      className="border p-1 rounded-md w-20 outline-none text-sm"
                      autoComplete="off"
                      value={handleProductVariantQuantity(color)}
                      onChange={(event) => {
                        const updatedVariant = productVariantsMultiple.map(
                          (variant) =>
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
                  <div className="flex flex-col gap-2 mt-3">
                    <label
                      htmlFor={`color_code_for_${color}`}
                      className="text-xs"
                    >
                      Color Code (in Hex)
                    </label>
                    <input
                      id={`color_code_for_${color}`}
                      type="text"
                      className="border p-1 rounded-md w-20 outline-none text-sm"
                      autoComplete="off"
                      value={handleProductVariantColorCode(color)}
                      onChange={(event) => {
                        const updatedVariant = productVariantsMultiple.map(
                          (variant) =>
                            variant.color === color
                              ? {
                                  ...variant,
                                  color_code: event.target.value,
                                }
                              : variant
                        );
                        setProductVariantsMultiple(updatedVariant);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="">
          {imagesFormatError && (
            <div className="mb-3 flex bg-red-300 py-2 px-2 gap-2 rounded">
              <BiSolidErrorCircle className="text-red-800" size={20} />
              <div className="text-red-800">{imagesFormatError}</div>
            </div>
          )}
        </div>
        <div className="mt-10">
          {productVariantsMultiple.map((variant, index) => (
            <div key={index} className="mb-5">
              <div className="flex flex-col mb-3">
                <span className="text-lg">{variant.color}</span>
                <span className="text-xs">Quantity: {variant.quantity}</span>
              </div>
              <div className="items-start grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {variant.images &&
                  variant.images.map((productVariantImage, imageIndex) => (
                    <div key={imageIndex} className="border h-auto">
                      <div className="border-b">
                        <div className="cursor-pointer">
                          <img
                            className="object-contain"
                            src={URL.createObjectURL(productVariantImage)}
                            alt="product"
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <div className="flex justify-end items-center py-2 px-5">
                        {/* <AiOutlineStar size={20} className="cursor-pointer" /> */}
                        <div
                          onClick={() =>
                            handleRemovingSelectedImage(
                              variant.color,
                              imageIndex
                            )
                          }
                        >
                          <BsTrash
                            size={20}
                            className="text-danger-900 cursor-pointer"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Variants;
