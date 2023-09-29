import React, { useEffect, useState } from "react";

const ProductBasicInformation = ({
  basicProductInformation,
  updateBasicProductInformation,
}) => {
  const [ProductType, setProductType] = useState([
    "Sunglasses",
    "Eyeglasses",
    "Lens",
  ]);

  const [basicInformation, setBasicInformation] = useState({
    name: "",
    sku: "",
    description: "",
    manufacturer: "",
    type: "",
  });

  useEffect(() => {
    updateBasicProductInformation(basicInformation);
  }, [basicInformation]);

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
            value={basicProductInformation.name}
            onChange={(e) =>
              updateBasicProductInformation({
                ...basicProductInformation,
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
            value={basicProductInformation.sku}
            onChange={(e) =>
              updateBasicProductInformation({
                ...basicProductInformation,
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
            value={basicProductInformation.manufacturer}
            onChange={(e) =>
              updateBasicProductInformation({
                ...basicProductInformation,
                manufacturer: e.target.value,
              })
            }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="subcategory" className="text-sm mb-1">
            Select a category
          </label>
          <div className="flex flex-grow mt-2">
            <select
              id="subcategory"
              value={basicProductInformation.type}
              onChange={(e) =>
                updateBasicProductInformation({
                  ...basicProductInformation,
                  type: e.target.value,
                })
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
        <div className="mb-3">
          <label htmlFor="description" className="text-sm">
            Product Description
          </label>
          <textarea
            id="description"
            rows={3}
            className="border p-2 rounded-md w-full outline-none text-sm"
            autoComplete="off"
            value={basicProductInformation.description}
            onChange={(e) =>
              updateBasicProductInformation({
                ...basicProductInformation,
                description: e.target.value,
              })
            }
          />
        </div>
        {/* <div className="flex justify-end">
          <button
            type="submit"
            className="w-full h-12 md:w-36 md:h-10 rounded-md text-white focus:outline-none bg-blue-600"
          >
            <p className="">Save Changes</p>
          </button>
        </div> */}
      </div>
    </>
  );
};

export default ProductBasicInformation;
