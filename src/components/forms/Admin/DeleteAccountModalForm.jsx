import React from "react";

import ModalButtons from "../../ui/Admin/ModalButtons";

const DeleteAccountModalForm = ({ onChangeModal }) => {
  return (
    <>
      <p className="mt-5 text-sm text-offwhite-100">
        This action is irreversible and will permanently remove all your account
        data, including your profile information, settings, and any associated
        content.
      </p>
      <ModalButtons type="delete_account" onClick={onChangeModal} />
    </>
  );
};

export default DeleteAccountModalForm;
