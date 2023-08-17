import React from "react";

import { BiDollarCircle, BiHomeAlt2 } from "react-icons/bi";
import { BsFillCartCheckFill, BsTelephone } from "react-icons/bs";
import { SlLocationPin, SlCalender } from "react-icons/sl";
import { MdOutlineMail, MdPayment } from "react-icons/md";

import Person from "../../../../assets/images/test/person.jpg";

const CustomerInformation = () => {
  return (
    <>
      {/* left side */}
      <div className="w-full md:w-1/2 border-b mb-10 md:mb-0 md:border-b-0 md:border-e">
        <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-start lg:items-start p-5 gap-5">
          <div className="h-24 w-24 rounded-full overflow-hidden mr-2">
            <img
              src={Person}
              alt="person"
              className="object-cover rounded-full h-full w-full"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col gap-2">
              <div className="flex gap-5 justify-center items-center">
                <p className="text-2xl">Roger Kenter</p>
                <div className="hidden sm:flex justify-center items-center gap-2">
                  <SlCalender size={14} className="text-slate-500" />
                  <p className="text-sm text-slate-500">Customer since 2023</p>
                </div>
              </div>
              <div className="flex gap-1">
                <SlLocationPin size={18} />
                <p className="text-sm">Texas, USA</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="mx-5 my-5">
            <p className="text-2xl">Contact Info</p>
          </div>
          <div className="mx-5">
            <div className="flex flex-col md:flex-row gap-5 mb-5">
              <div className="flex gap-2 w-full md:w-1/2">
                <MdOutlineMail size={20} className="w-1/6" />
                <div className="flex flex-col w-5/6">
                  <p className="text-slate-400 text-base md:text-sm mb-2">
                    Email
                  </p>
                  <p className="text-base md:text-sm">roger@gmail.com</p>
                </div>
              </div>
              <div className="flex gap-2 w-full md:w-1/2">
                <BsTelephone size={15} className="w-1/6" />
                <div className="flex flex-col w-5/6">
                  <p className="text-slate-400 text-base md:text-sm mb-2">
                    Phone
                  </p>
                  <p className="text-base md:text-sm">(+1) 505-999-1234</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-5 mb-5">
              <div className="flex gap-2 w-full md:w-1/2">
                <MdPayment size={20} className="w-1/6" />
                <div className="flex flex-col w-5/6">
                  <p className="text-slate-400 text-base md:text-sm mb-2">
                    Payment Method
                  </p>
                  <p className="text-base md:text-sm">Paypal</p>
                </div>
              </div>
              <div className="flex gap-2 w-full md:w-1/2">
                <BiHomeAlt2 size={20} className="w-1/6" />
                <div className="flex flex-col w-full md:w-5/6">
                  <p className="text-slate-400 text-base md:text-sm mb-2">
                    Shipping adderss
                  </p>
                  <p className="text-base md:text-sm">
                    45 Roker Terrace Latheron wheel KW5 8NW, London, UK
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* right side */}
      <div className="flex flex-col lg:flex-row justify-center items-center w-full mb-10 md:mb-0 md:w-1/2 p-5">
        <div className="flex flex-col justify-center items-center w-full lg:w-1/2 mb-5 lg:mb-0">
          <div className="flex gap-2 mb-5">
            <BsFillCartCheckFill size={25} className="text-slate-700" />
            <p className="text-slate-700 whitespace-nowrap">
              Total Orders Placed
            </p>
          </div>
          <div>
            <p className="text-4xl text-center">87</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-full lg:w-1/2 mb-5 lg:mb-0">
          <div className="flex gap-2 mb-5">
            <BiDollarCircle size={25} className="text-slate-700" />
            <p className="text-slate-700 whitespace-nowrap">
              Total Amount Spent
            </p>
          </div>
          <div className="">
            <p className="text-4xl text-center">$13,217</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerInformation;