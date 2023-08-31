import React, { useState } from "react";

import { BsTrash, BsX } from "react-icons/bs";
import { AiOutlineEye, AiOutlineStar, AiFillStar } from "react-icons/ai";

import SelectImageIcon from "../../../../../assets/icons/select_image.svg";

const Variants = ({ productFrameColors }) => {
  const [productVariantsMultiple, setProductVariantsMultiple] = useState([]);

  const handleImageChangeMultiple = (color, quantity, images) => {
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
                id={`image-${index}`}
                type="file"
                accept="image/*"
                multiple
                onChange={(event) =>
                  handleImageChangeMultiple(color, 0, event.target.files)
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
                        />
                      </div>
                    </div>
                    <div className="flex justify-between items-center py-2 px-5">
                      <AiOutlineStar size={20} className="cursor-pointer" />
                      <BsTrash
                        size={20}
                        className="text-danger-900 cursor-pointer"
                      />
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
