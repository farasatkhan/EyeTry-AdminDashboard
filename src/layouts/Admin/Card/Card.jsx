import React from "react";

import { BiLineChart } from "react-icons/bi";

import CardStyles from "./Card.module.css";

const Card = () => {
  return (
    <>
      <div className="border border-slate-100 m-3 rounded-lg">
        <div className="flex m-1">
          <div className="flex flex-1 flex-col gap-2 p-2">
            <p className="font-bold">Total Users</p>
            <p
              className={`${CardStyles["primary-green-color"]} font-bold text-2xl`}
            >
              29400
            </p>
          </div>
          <div className="flex-1 p-2">
            <p>graph</p>
          </div>
        </div>
        <div className="flex gap-3 p-2">
          <div
            className={`${CardStyles["secondary-background-green-color"]} flex gap-2 pl-1 pr-1 sm:pl-3 sm:pr-3 pt-1 rounded-sm`}
          >
            <div className="mt-1">
              <BiLineChart
                size={16}
                className={`${CardStyles["primary-green-color"]}`}
              />
            </div>
            <p className={`${CardStyles["primary-green-color"]} font-body`}>
              1.7%
            </p>
          </div>
          <div>
            <p className={`text-base md:text-lg font-light whitespace-nowrap`}>
              from 29.1%
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
