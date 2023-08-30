import React, { useState } from "react";

import { BsX } from "react-icons/bs";

const FrameColors = ({ selectedFrameColors, updateSelectedFrameColors }) => {
  const [colorsList, setColorsList] = useState(["Black", "White", "Metallic"]);

  const [toggleInputbox, setToggleInputbox] = useState(false);

  const [addNewColor, setAddNewColor] = useState("");

  const handleSubmittedColor = async () => {
    if (!colorsList.includes(addNewColor)) {
      setColorsList((prevColors) => [...prevColors, addNewColor]);
    } else {
      console.log("color is already present.");
    }
  };

  const handleSelectedColors = async (event) => {
    const value = event.target.labels[0].textContent;
    updateSelectedFrameColors(value, event.target.checked);
  };

  return (
    <>
      <div className="pl-4 py-4">
        <p>Colors</p>
      </div>
      <div className={`h-0.5 bg-slate-100`}></div>
      <div className="px-5 py-5">
        <div className="flex flex-col border-y border-slate-100 mb-4 max-h-40 overflow-y-auto">
          {colorsList.map((color, index) => (
            <div key={index} className="flex justify-between pr-5">
              <div className="flex py-2 gap-3 justify-start items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="w-5 h-5 cursor-pointer"
                  id={`color-${index}`}
                  onChange={handleSelectedColors}
                />
                <label htmlFor={`color-${index}`} className="cursor-pointer">
                  {color}
                </label>
              </div>
              <div
                className="flex justify-center items-center cursor-pointer"
                onClick={() => {
                  setColorsList(
                    colorsList.filter((colors) => colors !== color)
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
            <span className="text-sm">Add a new color</span>
          </div>
          <div className={`${toggleInputbox ? "block" : "hidden"} mt-4`}>
            <label htmlFor="color_type" className="text-sm">
              New color
            </label>
            <input
              id="color_type"
              type="text"
              className="w-full p-2 border outline-none text-sm mt-2"
              value={addNewColor}
              onChange={(e) => setAddNewColor(e.target.value)}
            />
            <div className="mt-2">
              <div
                className="flex justify-center items-center w-full py-2 border bg-blue-500 cursor-pointer"
                onClick={handleSubmittedColor}
              >
                <span className="text-center text-sm text-white">
                  Add New Color
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FrameColors;
