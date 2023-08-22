import React from "react";
import { NavLink } from "react-router-dom";

const ProductsHome = () => {
  return (
    <div className="mx-7 my-7">
      <div className="mb-5">
        <span className="text-lg">Products</span>
      </div>
      <div className="flex flex-col justify-between items-center border rounded-md py-44">
        <div>
          <p className="text-center">First up? What are you selling?</p>
          <p className="text-center text-sm mt-2">
            Before you start your store, you need to add products
          </p>
        </div>
        <div className="flex gap-5 pt-8">
          <button className="border px-4 py-1 rounded-lg shadow-sm">
            <span className="text-xs">Import products</span>
          </button>
          <NavLink to="/products/new">
            <button className="border px-4 py-1 rounded-lg shadow-sm">
              <span className="text-xs">Add your products</span>
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ProductsHome;
