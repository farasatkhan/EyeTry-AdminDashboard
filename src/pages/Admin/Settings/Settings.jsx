import React, { useState } from "react";

import SettingsCard from "../../../layouts/Admin/SettingsCard/SettingsCard";
import ActorModal from "../../../layouts/Admin/ActorModal/ActorModal";

import SettingsStyles from "./Settings.module.css";

const Settings = () => {
  const [closeModal, setCloseModal] = useState(false);
  const [modalType, setModalType] = useState({
    title: "",
    action: "",
  });

  const changeModalHandle = (title, action) => {
    setCloseModal(!closeModal);
    setModalType({ ...modalType, title: title, action: action });
  };

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleDeleteAccount = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <div>
        <div className="flex flex-grow justify-between ml-7 mr-7 mt-7">
          <div className="flex flex-col">
            <div className="flex gap-1">
              <p className="font-light text-slate-500">Settings /</p>
              <p className="">Settings</p>
            </div>
            <div className="mt-2">
              <p className="text-2xl">Settings</p>
            </div>
          </div>
        </div>
        <div
          className={`${SettingsStyles["line-height"]} bg-slate-100 ml-7 mr-7 mt-7`}
        ></div>
      </div>
      <div className="flex gap-5 m-5">
        <div className="hidden md:block shadow w-1/4 p-5 h-fit">
          <ul>
            <li className="li my-5 cursor-pointer">Basic Information</li>
            <li className="li my-5 cursor-pointer">Email</li>
            <li className="li my-5 cursor-pointer">Password</li>
            <li className="li my-5 cursor-pointer">Delete account</li>
          </ul>
        </div>
        <div className="w-full md:w-3/4">
          <SettingsCard title="Basic Information">
            <form action="">
              <div className="flex flex-col md:flex-row mb-3">
                <label
                  htmlFor="name"
                  className="whitespace-nowrap md:whitespace-normal text-sm w-1/5 mt-1 mb-1"
                >
                  Full name
                </label>
                <div className="flex flex-grow gap-2 md:w-4/5">
                  <input
                    id="name"
                    type="text"
                    placeholder="First name"
                    className="border h-10 outline-none w-1/2 rounded p-2"
                  />
                  <input
                    id="name"
                    type="text"
                    placeholder="Last name"
                    className="border h-10 outline-none w-1/2 rounded p-2"
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row mb-3">
                <label
                  htmlFor="email"
                  className="whitespace-nowrap md:whitespace-normal text-sm w-1/5 mt-1 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  placeholder="john@gmail.com"
                  className="border h-10 outline-none md:w-4/5 rounded p-2"
                />
              </div>
              <div className="flex flex-col md:flex-row mb-3">
                <label
                  htmlFor="phone"
                  className="whitespace-nowrap md:whitespace-normal text-sm w-1/5 mt-1 mb-1"
                >
                  Phone
                </label>
                <input
                  type="text"
                  placeholder="999-999-9999"
                  className="border h-10 outline-none md:w-4/5 rounded p-2"
                />
              </div>
              <div className="flex justify-end">
                <button className="w-full sm:w-36 h-12 rounded-md text-white focus:outline-none bg-blue-600">
                  <p>Save Changes</p>
                </button>
              </div>
            </form>
          </SettingsCard>
          <SettingsCard title="Password">
            <form action="">
              <div className="flex flex-col md:flex-row mb-3">
                <label
                  htmlFor="current_password"
                  className="whitespace-nowrap md:whitespace-normal text-sm w-1/5 mt-1 mb-1"
                >
                  Current Password
                </label>
                <input
                  id="current_password"
                  type="password"
                  placeholder="********"
                  className="border h-10 outline-none md:w-4/5 rounded p-2"
                />
              </div>
              <div className="flex flex-col md:flex-row mb-3">
                <label
                  htmlFor="new_password"
                  className="whitespace-nowrap md:whitespace-normal text-sm w-1/5 mt-1 mb-1"
                >
                  New Password
                </label>
                <input
                  id="new_password"
                  type="password"
                  placeholder="********"
                  className="border h-10 outline-none md:w-4/5 rounded p-2"
                />
              </div>
              <div className="flex flex-col md:flex-row mb-3">
                <label
                  htmlFor="confirm_password"
                  className="whitespace-nowrap md:whitespace-normal text-sm w-1/5 mt-1 mb-1"
                >
                  Confirm Password
                </label>
                <input
                  id="confirm_password"
                  type="password"
                  placeholder="********"
                  className="border h-10 outline-none md:w-4/5 rounded p-2"
                />
              </div>
              <div className="flex text-sm md:justify-end mb-4">
                <div className="w-full sm:w-4/5">
                  <p className="py-1">Password requirements</p>
                  <p className="text-offwhite-100 py-2">
                    Ensure that these requirements are met:
                  </p>
                  <ul className="text-offwhite-100 pl-4">
                    <li className="mb-1">
                      Minimum 8 characters long - the more, the better
                    </li>
                    <li className="mb-1">At least one lowercase character</li>
                    <li className="mb-1">At least one uppercase character</li>
                    <li className="mb-1">
                      At least one number, symbol, or whitespace character
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-end">
                <button className="w-full sm:w-36 h-12 rounded-md text-white focus:outline-none bg-blue-600">
                  <p>Save Changes</p>
                </button>
              </div>
            </form>
          </SettingsCard>
          <SettingsCard title="Delete your account">
            <form action="" onSubmit={handleDeleteAccount}>
              <div className="text-sm">
                When you delete your account, you lose access to the account
                permanently, and we permanently delete your personal data.
              </div>
              <div className="ml-4 mt-5 mb-10">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-indigo-600 cursor-pointer"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                  <span className="text-gray-700 text-sm cursor-pointer">
                    Confirm that I want to delete my account.
                  </span>
                </label>
              </div>
              <div className="flex justify-end">
                <button
                  className="w-full sm:w-36 h-12 rounded-md text-white focus:outline-none bg-danger-900"
                  onClick={() =>
                    changeModalHandle("Delete your account", "delete_account")
                  }
                >
                  <p className="text-white">Delete Account</p>
                </button>
              </div>
            </form>
          </SettingsCard>
        </div>
      </div>
      {closeModal && (
        <ActorModal
          title={modalType.title}
          action={modalType.action}
          onChangeModal={changeModalHandle}
        />
      )}
    </div>
  );
};

export default Settings;
