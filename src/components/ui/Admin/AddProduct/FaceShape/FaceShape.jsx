import React, { useState } from "react";

import { BsX } from "react-icons/bs";

const FaceShape = ({
  selectedFrameFaceShape,
  updateSelectedFrameFaceShape,
}) => {
  const [faceShapeList, setFaceShapeList] = useState([
    "Round Face",
    "Square Face",
    "Oval Face",
    "Heart-shaped Face",
    "Diamond Face",
    "Rectangle/Long Face",
  ]);

  const [toggleInputbox, setToggleInputbox] = useState(false);

  const [addNewFaceShape, setAddNewFaceShape] = useState("");

  const handleSubmittedFaceShape = async () => {
    if (!faceShapeList.includes(addNewFaceShape)) {
      setFaceShapeList((prevFaceShapeList) => [
        ...prevFaceShapeList,
        addNewFaceShape,
      ]);
    } else {
      console.log("Face shape is already present.");
    }
  };

  const handleSelectedFaceShapes = async (event) => {
    const value = event.target.labels[0].textContent;
    updateSelectedFrameFaceShape(value, event.target.checked);
  };

  return (
    <>
      <div className="pl-4 py-4">
        <p>Face Shape</p>
      </div>
      <div className={`h-0.5 bg-slate-100`}></div>
      <div className="px-5 py-5">
        <div className="flex flex-col border-y border-slate-100 mb-4 max-h-40 overflow-y-auto">
          {faceShapeList.map((faceShape, index) => (
            <div key={index} className="flex justify-between pr-5">
              <div className="flex py-2 gap-3 justify-start items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="w-5 h-5 cursor-pointer"
                  id={`faceShape-${index}`}
                  onChange={handleSelectedFaceShapes}
                />
                <label
                  htmlFor={`faceShape-${index}`}
                  className="cursor-pointer"
                >
                  {faceShape}
                </label>
              </div>
              <div
                className="flex justify-center items-center cursor-pointer"
                onClick={() => {
                  setFaceShapeList(
                    faceShapeList.filter((shape) => shape !== faceShape)
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
            <span className="text-sm">Add a new face shape</span>
          </div>
          <div className={`${toggleInputbox ? "block" : "hidden"} mt-4`}>
            <label htmlFor="face_shape" className="text-sm">
              New face shape
            </label>
            <input
              id="face_shape"
              type="text"
              className="w-full p-2 border outline-none text-sm mt-2"
              value={addNewFaceShape}
              onChange={(e) => setAddNewFaceShape(e.target.value)}
            />
            <div className="mt-2">
              <div
                className="flex justify-center items-center w-full py-2 border bg-blue-500 cursor-pointer"
                onClick={handleSubmittedFaceShape}
              >
                <span className="text-center text-sm text-white">
                  Add New Face Shape
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaceShape;
