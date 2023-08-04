import React from "react";

import { BsPersonFillSlash, BsPersonFillCheck } from "react-icons/bs";

/*
    Ban User - danger
    Life Ban - primary
*/

const BanControl = ({ text, type, onClick }) => {
  return type === "primary" ? (
    <div
      className={`px-2 cursor-pointer flex bg-primary-100 h-9 justify-center items-center rounded-lg gap-1`}
      onClick={() => onClick("Lift ban?", "unban")}
    >
      <BsPersonFillCheck size={20} className={`text-primary-900`} />
      <p className={`text-primary-900 font-bold whitespace-nowrap`}>{text}</p>
    </div>
  ) : (
    <div
      className={`px-2 cursor-pointer flex bg-danger-100 h-9 justify-center items-center rounded-lg gap-1`}
      onClick={() => onClick("Ban User?", "ban")}
    >
      <BsPersonFillSlash size={20} className={`text-danger-900`} />
      <p className={`text-danger-900 font-bold whitespace-nowrap`}>{text}</p>
    </div>
  );
};

export default BanControl;
