import React, { useState, useEffect } from "react";

/*
    ban, unban, add
*/
const ModalButtons = ({ type }) => {
  const [properties, setProperties] = useState({
    color: "",
    cancelText: "",
    actionText: "",
  });

  useEffect(() => {
    if (type === "ban") {
      setProperties({
        ...properties,
        color: "bg-danger-900",
        cancelText: "Cancel",
        actionText: "Ban User",
      });
    } else if (type === "unban") {
      setProperties({
        ...properties,
        color: "bg-primary-900",
        cancelText: "Cancel",
        actionText: "Lift Ban",
      });
    } else if (type === "add") {
      setProperties({
        ...properties,
        color: "bg-primary-900",
        cancelText: "Discard",
        actionText: "Add User",
      });
    }
  }, [type]);

  return (
    <div className="flex justify-end gap-4 mt-4">
      <button className="text-white font-bold px-2 py-1 sm:py-2 sm:px-4 rounded border">
        <p className="text-tertiary-100 text-sm font-light">
          {properties.cancelText}
        </p>
      </button>
      <button
        className={`${properties.color} text-white font-bold px-2 py-1 sm:py-2 sm:px-4 rounded`}
      >
        <p className="text-white text-sm font-light">{properties.actionText}</p>
      </button>
    </div>
  );
};

export default ModalButtons;
