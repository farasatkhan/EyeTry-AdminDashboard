import React from "react";

import CustomerInformation from "../../../../layouts/Admin/Orders/CustomerInformation/CustomerInformation";

const ViewParticularCustomerOrder = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row flex-grow justify-between ml-7 mr-7 mt-7">
        <div className="flex flex-col mb-5 md:mb-0 w-full">
          <div className="flex gap-1">
            <p className="font-light text-slate-500">Management /</p>
            <p className="">Orders details</p>
          </div>
          <div className="mt-2">
            <p className="text-2xl">Order #30123</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row border rounded-md mx-5 my-5">
        <CustomerInformation />
      </div>
    </div>
  );
};

export default ViewParticularCustomerOrder;
