import React, { useState, useEffect } from "react";

import { BsX } from "react-icons/bs";
import { BiSolidErrorCircle } from "react-icons/bi";

const Gender = ({
  selectedFrameGender,
  updateSelectedFrameGender,
  genderError,
}) => {
  const [gendersList, setGendersList] = useState([]);

  const [toggleInputbox, setToggleInputbox] = useState(false);

  const [addNewGender, setAddNewGender] = useState("");

  const handleSubmittedGenders = async () => {
    if (!gendersList.includes(addNewGender)) {
      // setGendersList((prevGenders) => [...prevGenders, addNewGender]);
      updateSelectedFrameGender(addNewGender, true);
    } else {
      console.log("gender is already present.");
    }
  };

  const handleSelectedGenders = async (event) => {
    const value = event.target.labels[0].textContent;
    updateSelectedFrameGender(value, event.target.checked);
  };

  useEffect(() => {
    setGendersList(selectedFrameGender);
  }, [selectedFrameGender]);

  return (
    <>
      <div className="pl-4 py-4">
        <p>Genders</p>
      </div>
      <div className={`h-0.5 bg-slate-100`}></div>
      <div className="px-5 py-5">
        <div className="flex flex-col border-y border-slate-100 mb-4 max-h-40 overflow-y-auto">
          {gendersList.map((gender, index) => (
            <div key={index} className="flex justify-between pr-5">
              <div className="flex py-2 gap-3 justify-start items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="w-5 h-5 cursor-pointer"
                  id={`gender-${index}`}
                  onChange={handleSelectedGenders}
                  checked={true}
                />
                <label htmlFor={`gender-${index}`} className="cursor-pointer">
                  {gender}
                </label>
              </div>
              {/* <div
                className="flex justify-center items-center cursor-pointer"
                onClick={() => {
                  setGendersList(
                    gendersList.filter((genders) => genders !== gender)
                  );
                }}
              >
                <BsX size={25} />
              </div> */}
            </div>
          ))}
        </div>
        <div className="flex flex-col mb-4">
          <div
            className="cursor-pointer text-blue-500 underline select-none"
            onClick={() => setToggleInputbox(!toggleInputbox)}
          >
            <span className="text-sm">
              {toggleInputbox ? "Hide gender type" : "Add gender type"}
            </span>
          </div>
          <div className={`${toggleInputbox ? "block" : "hidden"} mt-4`}>
            <label htmlFor="gender_type" className="text-sm">
              New gender
            </label>
            <input
              maxLength={10}
              id="gender_type"
              type="text"
              className="w-full p-2 border outline-none text-sm mt-2"
              value={addNewGender}
              onChange={(e) => setAddNewGender(e.target.value)}
            />
            <div className="mt-2">
              <div
                className="flex justify-center items-center w-full py-2 border bg-blue-500 cursor-pointer"
                onClick={handleSubmittedGenders}
              >
                <span className="text-center text-sm text-white">
                  Add New Gender
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-4">
          {genderError && (
            <div className="mb-3 flex bg-red-300 py-2 px-2 gap-2 rounded">
              <BiSolidErrorCircle className="text-red-800" size={20} />
              <div className="text-red-800">{genderError}</div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Gender;
