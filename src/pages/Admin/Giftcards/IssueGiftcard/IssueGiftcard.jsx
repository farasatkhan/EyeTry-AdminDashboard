import React from "react";

const IssueGiftcard = () => {
  return (
    <div className="mx-5 md:mx-10 lg:mx-40 my-10">
      <div className="mb-10">
        <span className="text-lg">Issue Gift card</span>
      </div>
      <div className="flex flex-col md:flex-row flex-grow gap-5">
        <div className="flex flex-grow w-full md:w-2/3">
          <div className="w-full bg-white px-5 py-5 border rounded-lg">
            <div className="mb-5">
              <span>Gift card details</span>
            </div>
            <div className="flex flex-col gap-1 my-2">
              <label htmlFor="giftcard_code" className="text-sm">
                Gift card code
              </label>
              <input
                id="giftcard_code"
                type="text"
                className="px-2 py-1.5 border shadow-sm rounded-md outline-none text-sm"
              />
            </div>
            <div className="flex flex-col gap-1 my-2">
              <label htmlFor="value" className="text-sm">
                Value
              </label>
              <input
                id="value"
                type="text"
                className="px-2 py-1.5 border shadow-sm rounded-md outline-none text-sm"
                placeholder="0.00"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-grow w-full md:w-1/3 gap-5">
          <div className="flex flex-grow">
            <div className="w-full bg-white px-5 pt-5 pb-2 border rounded-lg">
              <div className="mb-5">
                <span className="text-sm">
                  Customer email
                  <span className="text-xs italic ml-4">(Optional)</span>
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <input
                  id="giftcard_code"
                  type="text"
                  className="px-2 py-1.5 border shadow-sm rounded-md outline-none text-xs"
                  placeholder="Customer email"
                />
                <span className="text-xs italic mt-5">
                  Send Giftcard to customer directly.
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-grow">
            <div className="w-full bg-white px-5 pt-5 pb-2 border rounded-lg">
              <div className="mb-5">
                <span className="text-sm">Notes</span>
              </div>
              <div className="flex flex-col gap-1">
                <input
                  id="giftcard_code"
                  type="text"
                  className="px-2 py-1.5 border shadow-sm rounded-md outline-none text-xs"
                  placeholder="Add a note"
                />
                <span className="text-xs mt-5 italic">
                  For you and other staff.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-grow justify-end mt-5">
        <button className="border w-full py-3 md:w-auto md:px-4 md:py-1 rounded-lg shadow-sm bg-white">
          <span className="md:text-sm">Activate</span>
        </button>
      </div>
    </div>
  );
};

export default IssueGiftcard;
