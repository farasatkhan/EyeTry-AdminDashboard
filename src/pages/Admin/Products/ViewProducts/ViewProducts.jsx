import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import { BiSearch } from "react-icons/bi";
import { BsDownload, BsFilter } from "react-icons/bs";

import ProductsTable from "../../../../layouts/Admin/Products/ProductsTable";

import ViewProductsStyles from "./ViewProducts.module.css";

import {
  viewProductsList,
  deleteProduct,
} from "../../../../services/Products/glasses";

const ViewProducts = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchQuery = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    fetchProductsList();
  }, []);

  const [productsList, setProductsList] = useState([]);

  const fetchProductsList = async () => {
    try {
      const fetchProductsList = await viewProductsList();
      setProductsList(fetchProductsList);
    } catch (error) {
      console.error("Error fetching products list", error);
    }
  };

  const handleProductRemoval = async (productId) => {
    try {
      const removeProduct = await deleteProduct(productId);
      fetchProductsList();
    } catch (error) {
      console.error("Error removing products", error);
    }
  };

  return (
    <div className="mx-7 my-7">
      <div className="flex justify-between mb-5">
        <div>
          <span className="text-lg">Products</span>
        </div>
        <div className="flex gap-5">
          <button className="border px-3 py-0.5 rounded-lg shadow-sm bg-white">
            <span className="text-xs">Export</span>
          </button>
          {/* <button className="border px-3 py-0.5 rounded-lg shadow-sm bg-white">
            <span className="text-xs">Import</span>
          </button> */}
          <NavLink to="/products/new">
            <button className="border px-3 py-0.5 rounded-lg shadow-sm bg-white">
              <span className="text-xs">Add Product</span>
            </button>
          </NavLink>
        </div>
      </div>
      <div className="border shadow-sm rounded-lg bg-white">
        <div className="flex justify-between m-3">
          <div className="mt-3">
            <div className="hidden md:flex bg-slate-100 rounded-md">
              <div className="flex justify-center items-center pl-3">
                <BiSearch size={16} />
              </div>
              <input
                type="text"
                placeholder="Search Products"
                value={searchQuery}
                onChange={handleSearchQuery}
                // w-30 sm:w-60 md:w-80
                className="p-2 bg-transparent focus:outline-none text-sm"
              />
            </div>
            <div className="md:hidden pl-3">
              <BiSearch size={25} />
            </div>
          </div>
          <div className="flex justify-center items-center mr-5">
            {/* filter */}
            {/* <div className="px-3 py-1 flex justify-center items-center gap-3 border shadow-sm rounded-lg">
              <div className="flex justify-center items-center">
                <BsFilter size={16} />
              </div>
              <p className="text-sm">Filter</p>
            </div> */}
          </div>
        </div>
        {/* table */}
        <div className="mx-4">
          <ProductsTable
            handleProductRemoval={handleProductRemoval}
            data={productsList}
            query={searchQuery}
          />
        </div>
      </div>
    </div>
  );
};

export default ViewProducts;
