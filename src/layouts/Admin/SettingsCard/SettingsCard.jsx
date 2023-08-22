import React from "react";

import SettingsCardStyles from "./SettingsCard.module.css";

const SettingsCard = ({ title, children }) => {
  return (
    <div className="border shadow-sm mb-10 rounded-lg bg-white">
      <div className="pl-4 py-4">
        <p>{title}</p>
      </div>
      <div
        className={`${SettingsCardStyles["line-height"]} bg-slate-100`}
      ></div>
      <div className="px-5 py-5">{children}</div>
    </div>
  );
};

export default SettingsCard;
