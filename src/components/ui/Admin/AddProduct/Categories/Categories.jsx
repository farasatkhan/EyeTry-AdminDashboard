import React, { useEffect, useState } from "react";

const Categories = ({ selectedCategories, updateSelectedCategories }) => {
  const [categoriesList, setCategoriesList] = useState([]);

  const [toggleInputbox, setToggleInputbox] = useState(false);

  const [addCategory, setAddCategory] = useState("");

  const handleSubmittedCategory = async () => {
    if (!categoriesList.includes(addCategory)) {
      // setCategoriesList((prevCategories) => [...prevCategories, addCategory]);
      updateSelectedCategories(addCategory, true);
    } else {
      console.log("Category is already present");
    }
  };

  const handleSelectedCategories = async (event) => {
    const value = event.target.labels[0].textContent;
    updateSelectedCategories(value, event.target.checked);
  };

  useEffect(() => {
    setCategoriesList(selectedCategories);
  }, [selectedCategories]);

  return (
    <>
      <div className="pl-4 py-4">
        <p>Categories</p>
      </div>
      <div className={`h-0.5 bg-slate-100`}></div>
      <div className="px-5 py-5">
        <div className="flex flex-col border-y border-slate-100 mb-4 max-h-40 overflow-y-auto">
          {categoriesList.map((category, index) => (
            <div
              key={index}
              className="flex py-2 gap-3 justify-start items-center cursor-pointer"
            >
              <input
                type="checkbox"
                className="w-5 h-5 cursor-pointer"
                id={`category-${index}`}
                checked={true}
                onChange={handleSelectedCategories}
              />
              <label htmlFor={`category-${index}`} className="cursor-pointer">
                {category}
              </label>
            </div>
          ))}
        </div>
        <div className="flex flex-col mb-4">
          <div
            className="cursor-pointer text-blue-500 underline select-none"
            onClick={() => setToggleInputbox(!toggleInputbox)}
          >
            <span className="text-sm">Add a new category</span>
          </div>
          <div className={`${toggleInputbox ? "block" : "hidden"} mt-4`}>
            <label htmlFor="new_category" className="text-sm">
              New category
            </label>
            <input
              id="new_category"
              type="text"
              className="w-full p-2 border outline-none text-sm mt-2"
              value={addCategory}
              onChange={(e) => setAddCategory(e.target.value)}
            />
            <div className="mt-2">
              <div
                className="flex justify-center items-center w-full py-2 border bg-blue-500 cursor-pointer"
                onClick={handleSubmittedCategory}
              >
                <span className="text-center text-sm text-white">
                  Add New Category
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
