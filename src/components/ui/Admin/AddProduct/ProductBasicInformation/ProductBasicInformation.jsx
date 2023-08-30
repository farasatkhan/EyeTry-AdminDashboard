import React, { useState } from "react";

const ProductBasicInformation = () => {
  return (
    <>
      <div className="pl-4 py-4">
        <p>Product Information</p>
      </div>
      <div className={`h-0.5 bg-slate-100`}></div>
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
    </>
  );
};

export default ProductBasicInformation;
