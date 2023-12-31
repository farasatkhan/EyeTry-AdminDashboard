import React from "react";
import { useState, useEffect } from "react";

import { BiSearch } from "react-icons/bi";
import { BsDownload, BsFilter } from "react-icons/bs";

import { jsonDownloader } from "../../../utils/JSONDownloader";

import Card from "../../../layouts/Admin/Card";

import InformationTableAgent from "../../../layouts/Admin/InformatioTableAgent/InformationTableAgent";

import ActorModal from "../../../layouts/Admin/ActorModal/ActorModal";

// import data from "../../../data/Admin/informationTableData";

import { getAllSupportAgents } from "../../../../src/services/Admin/admin";
import { viewAgentsAnalytics } from "../../../../src/services/Admin/admin";

import {
  generateAgentsDashboardData,
  generateCardData,
} from "../../../utils/generateCardData";

const UsersPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [closeModal, setCloseModal] = useState(false);
  const [modalType, setModalType] = useState({
    title: "",
    action: "",
    user_id: "",
    user_role: "",
  });

  const handleSearchQuery = (event) => {
    setSearchQuery(event.target.value);
  };

  const changeModalHandle = (title, action, user_id, user_role) => {
    setCloseModal(!closeModal);
    setModalType({
      ...modalType,
      title: title,
      action: action,
      user_id: user_id,
      user_role: user_role,
    });
  };

  const [agents, setAgents] = useState([]);

  useEffect(() => {
    if (!closeModal) {
      fetchAllAgents();
    }
  }, [closeModal]);

  const [agentsAnalytics, setAgentsAnalytics] = useState([]);

  const fetchAllAgents = async () => {
    try {
      const fetchAllAgents = await getAllSupportAgents();
      const viewAgentsStats = await viewAgentsAnalytics();
      setAgents(fetchAllAgents);
      setAgentsAnalytics(viewAgentsStats);
    } catch (error) {
      console.error("Error fetching agents", error);
    }
  };

  const supportData = generateAgentsDashboardData();

  return (
    <div className="font-body">
      <div className="flex flex-col">
        <div className="flex flex-grow justify-between ml-7 mr-7 mt-7">
          <div className="flex flex-col">
            <div className="flex gap-1">
              <p className="font-light text-slate-500">Management /</p>
              <p className="">Agents</p>
            </div>
            <div className="mt-2">
              <p className="text-2xl">Agents</p>
            </div>
          </div>
          {/* <div className="flex">
            <button
              className="w-36 h-10 rounded-md text-white focus:outline-none bg-blue-600"
              onClick={() => changeModalHandle("Add new user", "add")}
            >
              <p className="">Add User</p>
            </button>
          </div> */}
        </div>
        <div className={`h-1/2 bg-slate-100 ml-7 mr-7 mt-7`}></div>
        <div className="grid grid-cols-1 custom-sm:grid-cols-2 lg:grid-cols-4 mx-7 mt-7 gap-5">
          <Card
            title="Total Agents"
            total={agentsAnalytics.totalAgents}
            percentage={1.7}
            change={29.1}
            data={agentsAnalytics.totalAgentsChart}
          />
          <Card
            title="Active Agents"
            total={agentsAnalytics.activeAgents}
            percentage={1.7}
            change={29.1}
            data={agentsAnalytics.ActiveAgentsChart}
          />
          <Card
            title="Banned Agents"
            total={agentsAnalytics.bannedAgents}
            percentage={1.7}
            change={29.1}
            data={agentsAnalytics.BannedAgentsChart}
          />
          <Card
            title="New Agents"
            total={agentsAnalytics.agentsCurrentMonth}
            percentage={1.7}
            change={29.1}
            data={agentsAnalytics.totalAgentsChart}
          />
        </div>
        <div className="border border-slate-100 m-3 rounded-lg bg-white">
          <div className="flex justify-between m-3">
            <div className="mt-3">
              <div className="hidden md:flex bg-slate-100 rounded-md">
                <div className="flex justify-center items-center p-3">
                  <BiSearch size={20} />
                </div>
                <input
                  type="text"
                  id="search_agents"
                  value={searchQuery}
                  onChange={handleSearchQuery}
                  // w-30 sm:w-60 md:w-80
                  className="p-2 bg-transparent focus:outline-none"
                  placeholder="Search Agents"
                />
              </div>
              <div className="md:hidden p-3">
                <BiSearch size={25} />
              </div>
            </div>
            <div className="flex justify-end">
              {/* export */}
              <div
                onClick={() => jsonDownloader(agents, "agents.json")}
                className="cursor-pointer flex justify-center items-center gap-3 px-5 h-10 text-center m-3 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
              >
                <div className="flex justify-center items-center">
                  <BsDownload size={20} />
                </div>
                <p>Export</p>
              </div>
              {/* filter */}
              {/* <div className="px-3 flex justify-center items-center gap-3 border border-slate-100 rounded-lg m-3 w-32 h-10">
                <div className="flex justify-center items-center">
                  <BsFilter size={20} />
                </div>
                <p>Filter</p>
              </div> */}
            </div>
          </div>
          {/* table */}
          <div className="">
            <InformationTableAgent
              data={agents}
              query={searchQuery}
              onCloseModal={changeModalHandle}
            />
          </div>
        </div>
      </div>
      {closeModal && (
        <ActorModal
          title={modalType.title}
          action={modalType.action}
          onChangeModal={changeModalHandle}
          user_id={modalType.user_id}
          user_role={modalType.user_role}
        />
      )}
    </div>
  );
};

export default UsersPage;
