import React, { useState } from "react";

import { BsX } from "react-icons/bs";

const FrameMaterial = ({
  selectedFrameMaterials,
  updateSelectedFrameMaterials,
}) => {
  const [frameMaterialList, setFrameMaterialList] = useState([
    "Acetate",
    "Metal",
    "TR-90",
  ]);

  const [toggleInputbox, setToggleInputbox] = useState(false);

  const [addNewFrameMaterial, setAddNewFrameMaterial] = useState("");

  const handleSubmittedFrameMaterial = async () => {
    if (!frameMaterialList.includes(addNewFrameMaterial)) {
      setFrameMaterialList((prevFrameMaterials) => [
        ...prevFrameMaterials,
        addNewFrameMaterial,
      ]);
    } else {
      console.log("Frame material is already present.");
    }
  };

  const handleSelectedFrameMaterials = async (event) => {
    const value = event.target.labels[0].textContent;
    updateSelectedFrameMaterials(value, event.target.checked);
  };

  return (
    <>
      <div className="pl-4 py-4">
        <p>Frame Material</p>
      </div>
      <div className={`h-0.5 bg-slate-100`}></div>
      <div className="px-5 py-5">
        <div className="flex flex-col border-y border-slate-100 mb-4 max-h-40 overflow-y-auto">
          {frameMaterialList.map((frameMaterial, index) => (
            <div key={index} className="flex justify-between pr-5">
              <div className="flex py-2 gap-3 justify-start items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="w-5 h-5 cursor-pointer"
                  id={`frameMaterial-${index}`}
                  onChange={handleSelectedFrameMaterials}
                />
                <label
                  htmlFor={`frameMaterial-${index}`}
                  className="cursor-pointer"
                >
                  {frameMaterial}
                </label>
              </div>
              <div
                className="flex justify-center items-center cursor-pointer"
                onClick={() => {
                  setFrameMaterialList(
                    frameMaterialList.filter(
                      (material) => material !== frameMaterial
                    )
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
            <span className="text-sm">Add a new frame material</span>
          </div>
          <div className={`${toggleInputbox ? "block" : "hidden"} mt-4`}>
            <label htmlFor="new_category" className="text-sm">
              New frame material
            </label>
            <input
              id="category"
              type="text"
              className="w-full p-2 border outline-none text-sm mt-2"
              value={addNewFrameMaterial}
              onChange={(e) => setAddNewFrameMaterial(e.target.value)}
            />
            <div className="mt-2">
              <div
                className="flex justify-center items-center w-full py-2 border bg-blue-500 cursor-pointer"
                onClick={handleSubmittedFrameMaterial}
              >
                <span className="text-center text-sm text-white">
                  Add New Frame Material
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FrameMaterial;
