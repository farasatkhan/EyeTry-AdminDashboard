import React, { useEffect, useState } from "react";

import { BsXLg } from "react-icons/bs";

import ActorModalStyles from "./ActorModal.module.css";

import BanActorModalForm from "../../../components/forms/Admin/BanActorModalForm";
import UnBanActorModalForm from "../../../components/forms/Admin/UnBanActorModalForm";
import AddActorModalForm from "../../../components/forms/Admin/AddActorModalForm";

/*
  title: <anything>
  action: ban, unban
*/

const ActorModal = ({ title, action, onChangeModal }) => {
  const [modalAction, setModalAction] = useState("");

  useEffect(() => {
    setModalAction(action);
  }, [action]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-md w-3/4 sm:w-2/4">
        <div className="flex justify-between mx-5 my-4">
          <div className="">
            <p>{title}</p>
          </div>
          <div className="cursor-pointer" onClick={onChangeModal}>
            <BsXLg size={25} />
          </div>
        </div>
        <div
          className={`${ActorModalStyles["line-height"]} bg-slate-100`}
        ></div>
        <div className="mx-5 mb-5">
          {modalAction === "ban" ? (
            <BanActorModalForm onChangeModal={onChangeModal} />
          ) : modalAction === "unban" ? (
            <UnBanActorModalForm onChangeModal={onChangeModal} />
          ) : (
            <AddActorModalForm onChangeModal={onChangeModal} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ActorModal;
