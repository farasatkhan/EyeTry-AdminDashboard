import React, { useEffect, useState } from "react";

import { BsTrash, BsX } from "react-icons/bs";
import { AiOutlineEye, AiOutlineStar, AiFillStar } from "react-icons/ai";
import { BiSolidErrorCircle } from "react-icons/bi";

import SelectImageIcon from "../../../../../assets/icons/select_image.svg";

const Variants = ({ productFrameColors, updateVariants }) => {
  const [productVariantsMultiple, setProductVariantsMultiple] = useState([]);

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

  // const handleImageChangeMultiple = (color, quantity, images, totalImages) => {
  //   setProductVariantsMultiple((prevProductVariant) => [
  //     ...prevProductVariant,
  //     {
  //       color: color,
  //       quantity: quantity,
  //       image_count: totalImages,
  //       images: Array.from(images),
  //     },
  //   ]);

  //   console.log(productVariantsMultiple);
  // };

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

  useEffect(() => {
    updateVariants(productVariantsMultiple);
    console.log(productVariantsMultiple);
  }, [productVariantsMultiple]);

  const handleDisablingQuantity = (color) => {
    const VariantIndex = productVariantsMultiple.findIndex(
      (variant) => variant.color === color
    );

    console.log(productVariantsMultiple);

    console.log("color: " + color + " " + VariantIndex);

    // if (productVariantsMultiple[VariantIndex].images.length === 0) return true;

    return false;
  };

  const [imagesFormatError, setImageFormatError] = useState("");

  return (
    <>
      <div className="pl-4 py-4">
        <p>Variants</p>
      </div>
      <div className={`h-0.5 bg-slate-100`}></div>
      <div className="px-5 py-5">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {productFrameColors.map((color, index) => (
            <div key={index} className="flex gap-5 mb-5">
              <input
                name="product_images"
                id={`image-${index}`}
                type="file"
                accept="image/*"
                multiple
                onChange={(event) => {
                  const selectedFiles = event.target.files;
                  const totalImages = selectedFiles.length;

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
                <div className="flex flex-col gap-2 mt-3">
                  <label
                    htmlFor={`color_quantity_${color}`}
                    className="text-xs"
                  >
                    Quantity
                  </label>
                  <input
                    id={`color_quantity_${color}`}
                    type="text"
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
                {variant.images.map((productVariantImage, imageIndex) => (
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
                          handleRemovingSelectedImage(variant.color, imageIndex)
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
