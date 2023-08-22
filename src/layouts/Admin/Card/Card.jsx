import React from "react";

import { BiLineChart } from "react-icons/bi";

import CardStyles from "./Card.module.css";
import CardGraph from "../../../components/ui/Admin/Graphs/CardGraph";

const Card = ({ title, total, percentage, change }) => {
  return (
    <>
      <div className="border shadow-sm rounded-lg bg-white">
        <div className="flex m-1">
          <div className="flex w-full flex-col gap-2 p-2">
            <p className="font-bold">{title}</p>
            <p
              className={`${CardStyles["primary-green-color"]} font-bold text-2xl`}
            >
              {total}
            </p>
          </div>
          <div className="flex w-1/2 pt-5">
            <div>
              <div className="flex">
                <div
                  className={`${CardStyles["secondary-background-green-color"]} flex gap-2 pl-1 pr-1 sm:pl-3 sm:pr-3 pt-1 rounded-sm`}
                >
                  <div className="mt-1">
                    <BiLineChart
                      size={16}
                      className={`${CardStyles["primary-green-color"]}`}
                    />
                  </div>
                  <p className={`${CardStyles["primary-green-color"]}`}>
                    {percentage}%
                  </p>
                </div>
                {/* <div>
                  <p className={`mt-1 font-light whitespace-nowrap`}>
                    from {change}%
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="px-1 py-3 h-20">
          <CardGraph />
        </div>
      </div>
    </>
  );
};

export default Card;
