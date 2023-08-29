import React, { useState, useEffect } from "react";

const Pricing = ({ productPricing, updateProductPricing }) => {
  const [price, setPrice] = useState(productPricing.price);
  const [currency, setCurrency] = useState(productPricing.currency);
  const [discount, setDiscount] = useState(productPricing.discount);

  useEffect(() => {
    updateProductPricing({
      price: price,
      currency: currency,
      discount: discount,
    });
  }, [price, currency, discount]);

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
              id="price"
              type="text"
              className="border p-2 rounded-s-md w-full outline-none text-sm"
              placeholder="0.00"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
            />
            <select
              id="currency"
              value={currency}
              onChange={(event) => setCurrency(event.target.value)}
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
              id="discount"
              type="text"
              className="border p-2 rounded-md w-full outline-none text-sm"
              placeholder="0%"
              value={discount}
              onChange={(event) => setDiscount(event.target.value)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
