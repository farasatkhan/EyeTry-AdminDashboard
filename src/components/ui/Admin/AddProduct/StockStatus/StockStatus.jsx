import React, { useEffect, useState } from "react";

const StockStatus = ({ currentStockStatus, updateStockStatus }) => {
  // const [stockStatus, setStockStatus] = useState(currentStockStatus);

  // useEffect(() => {
  //   updateStockStatus(stockStatus);
  // }, [stockStatus]);

  return (
    <>
      <div className="pl-4 py-4">
        <p>Stock Status</p>
      </div>
      <div className={`h-0.5 bg-slate-100`}></div>
      <div className="px-5 py-5">
        <div className="cursor-pointer mb-3">
          <input
            type="radio"
            id="in_stock"
            value="in_stock"
            checked={currentStockStatus === "in_stock"}
            onChange={(event) => updateStockStatus(event.target.value)}
            className="mr-4 cursor-pointer"
          />
          <label htmlFor="in_stock" className="mr-4 cursor-pointer">
            In stock
          </label>
        </div>
        <div className="cursor-pointer mb-3">
          <input
            type="radio"
            id="out_of_stock"
            value="out_of_stock"
            checked={currentStockStatus === "out_of_stock"}
            onChange={(event) => updateStockStatus(event.target.value)}
            className="mr-4 cursor-pointer"
          />
          <label htmlFor="out_of_stock" className="mr-4 cursor-pointer">
            Out of stock
          </label>
        </div>
        <div className="cursor-pointer mb-3">
          <input
            type="radio"
            id="to_be_announced"
            value="to_be_announced"
            checked={currentStockStatus === "to_be_announced"}
            onChange={(event) => updateStockStatus(event.target.value)}
            className="mr-4 cursor-pointer"
          />
          <label htmlFor="to_be_announced" className="mr-4 cursor-pointer">
            To be announced
          </label>
        </div>
        <div className="cursor-pointer mb-3">
          <input
            type="radio"
            id="low_stock"
            value="low_stock"
            checked={currentStockStatus === "low_stock"}
            onChange={(event) => updateStockStatus(event.target.value)}
            className="mr-4 cursor-pointer"
          />
          <label htmlFor="low_stock" className="mr-4 cursor-pointer">
            Low stock
          </label>
        </div>
      </div>
    </>
  );
};

export default StockStatus;
