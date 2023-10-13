import React, { useEffect, useState } from "react";

import ModalButtons from "../../ui/Admin/ModalButtons";
import { unbanUser, unbanAgent } from "../../../services/Admin/admin";

const UnBanActorModalForm = ({ onChangeModal, user_id, user_role }) => {
  const handleUserUnBan = async (event) => {
    event.preventDefault();

    try {
      if (user_role === "user") {
        const bannedUser = await unbanUser(user_id);

        if (bannedUser.status === 200) {
          console.log("User is unbanned");
          onChangeModal();
        } else {
          console.log("User is not unbanned");
        }
      } else if (user_role === "agent") {
        const bannedAgent = await unbanAgent(user_id);

        if (bannedAgent.status === 200) {
          console.log("Agent is unbanned");
          onChangeModal();
        } else {
          console.log("Agent is not unbanned");
        }
      } else {
        console.log("user role not found. user_role is set to: ", user_role);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleUserUnBan}>
      <p className="mt-5 text-sm">
        This user is currently banned. This means the user is not alowed to take
        normal actions. Would you like to lift ban from this user? {user_id}
      </p>
      {/* <ModalButtons type="unban" onClick={onChangeModal} /> */}
      <div className="flex justify-end gap-4 mt-4">
        <button
          onClick={onChangeModal}
          className="text-white font-bold px-2 py-1 sm:py-2 sm:px-4 rounded border"
        >
          <p className="text-tertiary-100 text-sm font-light">Cancel</p>
        </button>
        <button
          type="submit"
          className={`bg-primary-900 text-white font-bold px-2 py-1 sm:py-2 sm:px-4 rounded`}
        >
          <p className="text-white text-sm font-light">Lift Ban</p>
        </button>
      </div>
    </form>
  );
};

export default UnBanActorModalForm;
