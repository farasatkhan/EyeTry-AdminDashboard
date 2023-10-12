import React, { useState, useEffect } from "react";

import SettingsCard from "../../../layouts/Admin/SettingsCard/SettingsCard";
import ActorModal from "../../../layouts/Admin/ActorModal/ActorModal";

import SettingsStyles from "./Settings.module.css";
import {
  getAdminProfile,
  updateAdminBasicInformation,
  updateAdminPassword,
} from "../../../services/Admin/admin";

const Settings = () => {
  const [passwordChangeStatus, setPasswordChangeStatus] = useState({
    status: "",
    error: "",
  });

  const [basicInformationChangeStatus, setBasicInformationChangeStatus] =
    useState({
      status: "",
      error: "",
    });

  const [admin, setAdmin] = useState({
    _id: "",
    firstName: "",
    lastName: "",
    email: "",
  });

  const [adminPassword, setAdminPassword] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

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

  const handleUpdateAdminBasicInformation = async (event) => {
    event.preventDefault();

    try {
      const updateAdmin = await updateAdminBasicInformation(admin._id, {
        firstName: admin.firstName,
        lastName: admin.lastName,
        email: admin.email,
      });

      if (updateAdmin.status === 200) {
        setBasicInformationChangeStatus((oldStatus) => ({
          ...oldStatus,
          status: updateAdmin.data.message,
        }));
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setBasicInformationChangeStatus((oldStatus) => ({
          ...oldStatus,
          error: error.response.data.message,
        }));
      } else {
        console.error(error);
      }
    }
  };

  const handleUpdateAdminPassword = async (event) => {
    event.preventDefault();

    try {
      const updatePassword = await updateAdminPassword(
        admin._id,
        adminPassword
      );

      if (updatePassword.status === 200) {
        setPasswordChangeStatus((oldStatus) => ({
          ...oldStatus,
          status: updatePassword.data.message,
        }));
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setPasswordChangeStatus((oldStatus) => ({
          ...oldStatus,
          error: error.response.data.message,
        }));
      } else {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    fetchAdmin();
  }, []);

  const fetchAdmin = async () => {
    try {
      const fetchedAdminProfile = await getAdminProfile();
      setAdmin(fetchedAdminProfile);
    } catch (error) {
      console.error("Error fetching admin", error);
    }
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
        <div className="border shadow-sm rounded-lg hidden md:block  w-1/4 p-5 h-fit bg-white">
          <ul>
            <li className="li my-5 cursor-pointer">Basic Information</li>
            <li className="li my-5 cursor-pointer">Email</li>
            <li className="li my-5 cursor-pointer">Password</li>
            {/* <li className="li my-5 cursor-pointer">Delete account</li> */}
          </ul>
        </div>
        <div className="w-full md:w-3/4">
          <SettingsCard title="Basic Information">
            <form onSubmit={handleUpdateAdminBasicInformation}>
              <div className="flex flex-col md:flex-row mb-3">
                <label
                  htmlFor="fname"
                  className="whitespace-nowrap md:whitespace-normal text-sm w-1/5 mt-1 mb-1"
                >
                  Full name
                </label>
                <div className="flex flex-grow gap-2 md:w-4/5">
                  <input
                    id="fname"
                    type="text"
                    placeholder="First name"
                    autoComplete="off"
                    value={admin.firstName}
                    onChange={(event) =>
                      setAdmin({ ...admin, firstName: event.target.value })
                    }
                    className="border h-10 outline-none w-1/2 rounded p-2"
                  />
                  <input
                    id="lname"
                    type="text"
                    placeholder="Last name"
                    autoComplete="off"
                    value={admin.lastName}
                    onChange={(event) =>
                      setAdmin({ ...admin, lastName: event.target.value })
                    }
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
                  autoComplete="off"
                  value={admin.email}
                  onChange={(event) =>
                    setAdmin({ ...admin, email: event.target.value })
                  }
                  className="border h-10 outline-none md:w-4/5 rounded p-2"
                />
              </div>
              {/* <div className="flex flex-col md:flex-row mb-3">
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
              </div> */}
              {basicInformationChangeStatus.error && (
                <div className="flex border rounded-md h-10 mb-5 bg-danger-900">
                  <div className="p-2">
                    <span className="text-sm text-slate-900">
                      {passwordChangeStatus.error}
                    </span>
                  </div>
                </div>
              )}
              {basicInformationChangeStatus.status && (
                <div className="flex border rounded-md h-10 mb-5 bg-primary-900">
                  <div className="p-2">
                    <span className="text-sm text-slate-900">
                      {basicInformationChangeStatus.status}
                    </span>
                  </div>
                </div>
              )}
              <div className="flex justify-end cursor-pointer">
                <button
                  type="submit"
                  className="w-full sm:w-36 h-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  <p>Update Profile</p>
                </button>
              </div>
            </form>
          </SettingsCard>
          <SettingsCard title="Password">
            <form onSubmit={handleUpdateAdminPassword}>
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
                  value={adminPassword.currentPassword}
                  onChange={(event) =>
                    setAdminPassword({
                      ...adminPassword,
                      currentPassword: event.target.value,
                    })
                  }
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
                  value={adminPassword.newPassword}
                  onChange={(event) =>
                    setAdminPassword({
                      ...adminPassword,
                      newPassword: event.target.value,
                    })
                  }
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
                  value={adminPassword.confirmPassword}
                  onChange={(event) =>
                    setAdminPassword({
                      ...adminPassword,
                      confirmPassword: event.target.value,
                    })
                  }
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
              {passwordChangeStatus.error && (
                <div className="flex border rounded-md h-10 mb-5 bg-danger-900">
                  <div className="p-2">
                    <span className="text-sm text-slate-900">
                      {passwordChangeStatus.error}
                    </span>
                  </div>
                </div>
              )}
              {passwordChangeStatus.status && (
                <div className="flex border rounded-md h-10 mb-5 bg-primary-900">
                  <div className="p-2">
                    <span className="text-sm text-slate-900">
                      {passwordChangeStatus.status}
                    </span>
                  </div>
                </div>
              )}
              <div className="flex justify-end cursor-pointer">
                <button
                  type="submit"
                  className="w-full sm:w-36 h-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  <p>Save</p>
                </button>
              </div>
            </form>
          </SettingsCard>
          {/* <SettingsCard title="Delete your account">
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
          </SettingsCard> */}
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
