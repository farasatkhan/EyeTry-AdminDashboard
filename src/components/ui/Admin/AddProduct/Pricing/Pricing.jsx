import React, { useState, useEffect } from "react";

const Pricing = ({ productPricing, updateProductPricing }) => {
  // const [price, setPrice] = useState(productPricing.price);
  // const [currency, setCurrency] = useState(productPricing.currency);
  // const [discount, setDiscount] = useState(productPricing.discount);

  // useEffect(() => {
  //   updateProductPricing({
  //     price: price,
  //     currency: currency,
  //     discount: discount,
  //   });
  // }, [price, currency, discount]);

  return (
    <>
      <div className="pl-4 py-4">
        <p>Pricing</p>
      </div>
      <div className={`h-0.5 bg-slate-100`}></div>
      <div className="px-5 py-5">
        <div className="flex flex-col mb-4">
          <label htmlFor="price">Price</label>
          <div className="flex">
            <input
              min={0}
              max={99999}
              id="price"
              type="number"
              className="border p-2 rounded-s-md w-full outline-none text-sm"
              placeholder="0.00"
              value={productPricing.price}
              onChange={(event) => {
                const value = event.target.value;

                const formattedValue = value.replace(/[^0-9.]/g, "");
                const parts = formattedValue.split(".");

                if (parts.length > 1) {
                  parts[1] = parts[1].slice(0, 2);
                }

                const result = parts.join(".");

                if (
                  result === "" ||
                  (parseFloat(result) >= 0 && parseFloat(result) <= 99999)
                ) {
                  updateProductPricing({
                    ...productPricing,
                    price: result,
                  });
                }
              }}
            />
            <select
              id="currency"
              value={productPricing.currency}
              onChange={(event) =>
                updateProductPricing({
                  ...productPricing,
                  currency: event.target.value,
                })
              }
              className="border px-1 sm:px-3 py-1 rounded-e-md outline-none text-sm cursor-pointer"
            >
              <option key="USD" value="USD" className="cursor-pointer">
                USD
              </option>
              <option key="PKR" value="PKR" className="cursor-pointer">
                PKR
              </option>
            </select>
          </div>
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="discount">Discount in percentage</label>
          <div className="flex">
            <input
              min={0}
              max={100}
              id="discount"
              type="number"
              className="border p-2 rounded-md w-full outline-none text-sm"
              placeholder="0%"
              value={productPricing.discount}
              onChange={(event) => {
                const value = event.target.value;

                const formattedValue = value.replace(/[^0-9.]/g, "");
                const parts = formattedValue.split(".");

                if (parts.length > 1) {
                  parts[1] = parts[1].slice(0, 2);
                }

                const result = parts.join(".");

                if (
                  result === "" ||
                  (parseFloat(result) >= 0 && parseFloat(result) <= 100)
                ) {
                  updateProductPricing({
                    ...productPricing,
                    discount: result,
                  });
                }
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
