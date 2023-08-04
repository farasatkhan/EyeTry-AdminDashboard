import React, { useState } from "react";

import ModalButtons from "../../../components/ui/Admin/ModalButtons";

const BanUserModalForm = () => {
  const [selectedOption, setSelectedOption] = useState("Forever");

  const options = [
    "Forever",
    "1 day",
    "3 days",
    "7 days",
    "14 days",
    "21 days",
    "30 days",
  ];

  const [banReason, setBanReason] = useState("");

  const handleBanReasonChange = (e) => {
    setBanReason(e.target.value);
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <>
      <p className="mt-5 text-sm">
        This user is currently not banned. This means the user is alowed to take
        normal actions. Would you like to ban this user?
      </p>
      <div className="flex items-center mt-4">
        <label className="mr-3 text-sm">Banned Until: </label>
        <select
          className="border px-1 sm:px-3 py-1 rounded-md outline-none text-sm"
          value={selectedOption}
          onChange={handleOptionChange}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="mt-4">
        <label htmlFor="textarea" className="text-sm">
          Block Reason:
        </label>
        <textarea
          id="textarea"
          className="border p-2 rounded-md w-full outline-none text-sm"
          rows="5"
          value={banReason}
          onChange={handleBanReasonChange}
        />
      </div>
      <ModalButtons type="ban" />
    </>
  );
};

export default BanUserModalForm;
