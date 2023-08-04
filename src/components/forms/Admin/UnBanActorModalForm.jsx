import React from "react";

import ModalButtons from "../../ui/Admin/ModalButtons";

const UnBanActorModalForm = ({ onChangeModal }) => {
  return (
    <>
      <p className="mt-5 text-sm">
        This user is currently banned. This means the user is not alowed to take
        normal actions. Would you like to lift ban from this user?
      </p>
      <ModalButtons type="unban" onClick={onChangeModal} />
    </>
  );
};

export default UnBanActorModalForm;
