import React, { useState } from "react";

import { BsX } from "react-icons/bs";

const FrameSize = ({ selectedFrameSizes, updateSelectedFrameSizes }) => {
  const [frameSizeList, setFrameSizeList] = useState([
    "Small",
    "Medium",
    "Large",
  ]);

  const [toggleInputbox, setToggleInputbox] = useState(false);

  const [addNewFrameSize, setAddNewFrameSize] = useState("");

  const handleSubmittedNewFrameSize = async () => {
    if (!frameSizeList.includes(addNewFrameSize)) {
      setFrameSizeList((prevFrameSize) => [...prevFrameSize, addNewFrameSize]);
    } else {
      console.log("Frame size is already present.");
    }
  };

  const handleSelectedFrameSize = async (event) => {
    const value = event.target.labels[0].textContent;
    updateSelectedFrameSizes(value, event.target.checked);
  };

  return (
    <>
      <div className="pl-4 py-4">
        <p>Frame Size</p>
      </div>
      <div className={`h-0.5 bg-slate-100`}></div>
      <div className="px-5 py-5">
        <div className="flex flex-col border-y border-slate-100 mb-4 max-h-40 overflow-y-auto">
          {frameSizeList.map((frameSize, index) => (
            <div key={index} className="flex justify-between pr-5">
              <div className="flex py-2 gap-3 justify-start items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="w-5 h-5 cursor-pointer"
                  id={`frameSize-${index}`}
                  onChange={handleSelectedFrameSize}
                />
                <label
                  htmlFor={`frameSize-${index}`}
                  className="cursor-pointer"
                >
                  {frameSize}
                </label>
              </div>
              <div
                className="flex justify-center items-center cursor-pointer"
                onClick={() => {
                  setFrameSizeList(
                    frameSizeList.filter((size) => size !== frameSize)
                  );
                }}
              >
                <BsX size={25} />
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col mb-4">
          <div
            className="cursor-pointer text-blue-500 underline select-none"
            onClick={() => setToggleInputbox(!toggleInputbox)}
          >
            <span className="text-sm">Add a new frame size</span>
          </div>
          <div className={`${toggleInputbox ? "block" : "hidden"} mt-4`}>
            <label htmlFor="new_category" className="text-sm">
              New frame size
            </label>
            <input
              id="category"
              type="text"
              className="w-full p-2 border outline-none text-sm mt-2"
              value={addNewFrameSize}
              onChange={(e) => setAddNewFrameSize(e.target.value)}
            />
            <div className="mt-2">
              <div
                className="flex justify-center items-center w-full py-2 border bg-blue-500 cursor-pointer"
                onClick={handleSubmittedNewFrameSize}
              >
                <span className="text-center text-sm text-white">
                  Add New Frame Size
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FrameSize;
