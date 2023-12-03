import React, { useState, useEffect } from "react";

import SettingsCard from "../../../layouts/Admin/SettingsCard/SettingsCard";
import ActorModal from "../../../layouts/Admin/ActorModal/ActorModal";

import API_URL from "../../../config/config";

import { BsFillPersonFill, BsPencil } from "react-icons/bs";

import SettingsStyles from "./Settings.module.css";
import {
  getAdminProfile,
  updateAdminBasicInformation,
  updateAdminPassword,
  updateAdminProfilePhoto,
  viewAdminProfilePhoto,
} from "../../../services/Admin/admin";
import { getDataFromLocalStorage } from "../../../utils/LocalStorage";

import { validatePassword, validateEmail } from "../../../utils/validation";

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

    const { email } = admin;

    if (!email) {
      setBasicInformationChangeStatus((oldStatus) => ({
        status: "",
        error: "Please fill in the email field.",
      }));
      return;
    }

    const isValidEmail = validateEmail(email);

    if (!isValidEmail) {
      setBasicInformationChangeStatus((oldStatus) => ({
        status: "",
        error: "Email is not valid",
      }));
      return;
    }

    // reset the error if everything is correct.
    setBasicInformationChangeStatus((oldStatus) => ({
      status: "",
      error: "",
    }));

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

    const { currentPassword, newPassword, confirmPassword } = adminPassword;

    if (!currentPassword || !newPassword || !confirmPassword) {
      setPasswordChangeStatus((oldStatus) => ({
        status: "",
        error: "Please fill in all password fields.",
      }));
      return;
    }

    if (newPassword !== confirmPassword) {
      setPasswordChangeStatus((oldStatus) => ({
        status: "",
        error: "New password and confirm password do not match.",
      }));
      return;
    }

    const isPasswordValid = validatePassword(newPassword);

    if (!isPasswordValid) {
      setPasswordChangeStatus((oldStatus) => ({
        status: "",
        error: "Password requirements not fullfilled.",
      }));
      return;
    }

    // reset the error if everything is correct.
    setPasswordChangeStatus((oldStatus) => ({
      status: "",
      error: "",
    }));

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
    const adminId = getDataFromLocalStorage("adminId");
    fetchAdmin(adminId);
  }, []);

  const [serverImageLocation, setServerImageLocation] = useState("");

  const fetchAdmin = async (adminId) => {
    try {
      const fetchedAdminProfile = await getAdminProfile(adminId);
      setAdmin(fetchedAdminProfile);

      const viewImageProfile = await viewAdminProfilePhoto();

      if (viewImageProfile.data.location) {
        const imageURL = API_URL + viewImageProfile.data.location;
        setServerImageLocation(imageURL);
      }
    } catch (error) {
      console.log("error occured in the settings");
      // console.error("Error fetching admin", error);
    }
  };

  const [selectedImage, setSelectedImage] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleImageChange = (event) => {
    const image = event.target.files[0];
    setSelectedImage(image);
    setUploadedImage(URL.createObjectURL(image));
  };

  const handleImageProfileUpdate = async (selectedImage) => {
    const formData = new FormData();
    formData.append("image", selectedImage);

    try {
      const updatedAdminProfileImage = await updateAdminProfilePhoto(formData);
      console.log("Admin photo is updated!", updatedAdminProfileImage);
    } catch (error) {
      console.error("Failed to update admin photo:", error);
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
            <li className="li my-5 cursor-pointer">Update Photo</li>
            <li className="li my-5 cursor-pointer">Basic Information</li>
            <li className="li my-5 cursor-pointer">Email</li>
            <li className="li my-5 cursor-pointer">Password</li>
            {/* <li className="li my-5 cursor-pointer">Delete account</li> */}
          </ul>
        </div>
        <div className="w-full md:w-3/4">
          <SettingsCard title="Upload Profile Image">
            <>
              <div className="flex flex-col justify-end cursor-pointer">
                <label
                  htmlFor="image-upload"
                  className="flex justify-center items-center gap-5 cursor-pointer"
                >
                  {}
                  {selectedImage ? (
                    <div className="flex justify-center items-center relative bg-slate-100 w-24 h-24 rounded-full">
                      <img
                        className="max-w-full max-h-full rounded-full"
                        src={uploadedImage}
                        alt="Preview"
                      />
                    </div>
                  ) : serverImageLocation ? (
                    <div className="flex justify-center items-center relative bg-slate-100 w-24 h-24 rounded-full">
                      <img
                        className="max-w-full max-h-full rounded-full"
                        src={serverImageLocation}
                        alt="Preview"
                      />
                    </div>
                  ) : (
                    <div className="flex justify-center items-center relative bg-slate-100 w-24 h-24 rounded-full">
                      <BsFillPersonFill size={80} className="text-slate-300" />
                      <div className="flex justify-center items-center absolute bg-white w-6 h-6 rounded-full border ml-20 mt-10">
                        <BsPencil size={10} />
                      </div>
                    </div>
                  )}

                  <input
                    type="file"
                    id="image-upload"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={handleImageChange}
                  />
                </label>
                <div className="flex justify-end">
                  <button
                    onClick={() => handleImageProfileUpdate(selectedImage)}
                    className="w-full sm:w-36 h-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    <p>Update Image</p>
                  </button>
                </div>
              </div>
            </>
          </SettingsCard>
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
                    data-cy="settings-update-first_name"
                    id="fname"
                    name="first_name"
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
                    data-cy="settings-update-last_name"
                    id="lname"
                    name="last_name"
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
                  data-cy="settings-update-email"
                  id="email"
                  type="email"
                  name="email"
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
                    <span
                      data-cy="settings-update-profile_status_error"
                      className="text-sm text-slate-900"
                    >
                      {basicInformationChangeStatus.error}
                    </span>
                  </div>
                </div>
              )}
              {basicInformationChangeStatus.status && (
                <div className="flex border rounded-md h-10 mb-5 bg-primary-900">
                  <div className="p-2">
                    <span
                      data-cy="settings-update-profile_status"
                      className="text-sm text-slate-900"
                    >
                      {basicInformationChangeStatus.status}
                    </span>
                  </div>
                </div>
              )}
              <div className="flex justify-end cursor-pointer">
                <button
                  data-cy="settings-update-profile-button"
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
