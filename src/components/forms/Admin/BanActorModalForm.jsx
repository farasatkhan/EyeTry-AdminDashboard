import React, { useState } from "react";

import ModalButtons from "../../ui/Admin/ModalButtons";
import { banUser, banAgent } from "../../../services/Admin/admin";

const BanUserModalForm = ({ onChangeModal, user_id, user_role }) => {
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

  const handleUserBan = async (event) => {
    event.preventDefault();

    try {
      const data = {
        banned_until: selectedOption,
        banned_reason: banReason,
      };

      if (user_role === "user") {
        const bannedUser = await banUser(user_id, data);

        if (bannedUser.status === 200) {
          console.log("User is banned");
          onChangeModal();
        } else {
          console.log("User is not banned");
        }
      } else if (user_role === "agent") {
        const bannedAgent = await banAgent(user_id, data);

        if (bannedAgent.status === 200) {
          console.log("Agent is banned");
          onChangeModal();
        } else {
          console.log("Agent is not banned");
        }
      } else {
        console.log("user role not found. user_role is set to: ", user_role);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleUserBan}>
      <p className="mt-5 text-sm">
        This user is currently not banned. This means the user is alowed to take
        normal actions. Would you like to ban this user? {user_id}
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
      {/* <ModalButtons type="ban" onClick={onChangeModal} /> */}
      <div className="flex justify-end gap-4 mt-4">
        <button
          onClick={onChangeModal}
          className="text-white font-bold px-2 py-1 sm:py-2 sm:px-4 rounded border"
        >
          <p className="text-tertiary-100 text-sm font-light">Cancel</p>
        </button>
        <button
          type="submit"
          className={`bg-danger-900 text-white font-bold px-2 py-1 sm:py-2 sm:px-4 rounded`}
        >
          <p className="text-white text-sm font-light">Ban User</p>
        </button>
      </div>
    </form>
  );
};

export default BanUserModalForm;
