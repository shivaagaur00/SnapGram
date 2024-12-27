import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import AccountCircleIcon from "@mui/icons-material/AccountCircle"; // New Profile Icon
import logo from "../../../Assets/Logo.png";
import { Link } from "react-router-dom";
import ChatIcon from '@mui/icons-material/Chat';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
// import { FireExtinguisher } from "@mui/icons-material";
const SideNavBar = ({ setActivePage }) => {
  return (
    <div
      className="fixed top-0 left-0 h-full w-[20rem] bg-gradient-to-b from-[#ff7e5f] to-[#feb47b] shadow-2xl p-6 flex flex-col animate-fadeIn"
    >
      <Link to="/">
        <div className="flex items-center mb-10 mt-8 group">
          <img
            src={logo}
            alt="SnapGram Logo"
            className="h-14 w-14 mr-4 transition-transform group-hover:scale-105"
          />
          <h2 className="text-white text-3xl font-extrabold tracking-wide group-hover:text-gray-200 transition-colors">
            SnapGram
          </h2>
        </div>
      </Link>
      <nav className="space-y-6 flex-1 w-full">
        <Link to="/">
          <button
            className="w-full flex items-center px-4 py-3 text-white bg-bg_primary hover:bg-bg_hover rounded-lg transition-transform transform hover:scale-105 shadow-md hover:shadow-lg"
          >
            <HomeIcon className="mr-4 text-gray-200 transition-colors group-hover:text-white" />
            <span className="text-lg font-semibold">Home</span>
          </button>
        </Link>
        <button
          className="w-full flex items-center px-4 py-3 text-white bg-bg_primary hover:bg-bg_hover rounded-lg transition-transform transform hover:scale-105 shadow-md hover:shadow-lg"
          onClick={() => setActivePage("Chats")}
        >
          {/* <ChatIcon className="mr-1 text-gray-200 transition-colors group-hover:text-white" /> */}
          <LocalFireDepartmentIcon className="mr-4 text-gray-200 transition-colors group-hover:text-white" />
          <span className="text-lg font-semibold">Chats and Streaks</span>
        </button>
        <button
          className="w-full flex items-center px-4 py-3 text-white bg-bg_primary hover:bg-bg_hover rounded-lg transition-transform transform hover:scale-105 shadow-md hover:shadow-lg"
          onClick={() => setActivePage("ExplorePosts")}
        >
          <TravelExploreIcon className="mr-4 text-gray-200 transition-colors group-hover:text-white" />
          <span className="text-lg font-semibold">Explore</span>
        </button>
        <button
          className="w-full flex items-center px-4 py-3 text-white bg-bg_primary hover:bg-bg_hover rounded-lg transition-transform transform hover:scale-105 shadow-md hover:shadow-lg"
          onClick={() => setActivePage("Profile")}
        >
          <AccountCircleIcon className="mr-4 text-gray-200 transition-colors group-hover:text-white" />
          <span className="text-lg font-semibold">Profile</span>
        </button>
        <button className="w-full flex items-center px-4 py-3 text-white bg-bg_primary hover:bg-bg_hover rounded-lg transition-transform transform hover:scale-105 shadow-md hover:shadow-lg"
        onClick={() => setActivePage("People")}>

          <PeopleAltIcon className="mr-4 text-gray-200 transition-colors group-hover:text-white" />
          <span className="text-lg font-semibold">People</span>
        </button>
        <button className="w-full flex items-center px-4 py-3 text-white bg-bg_primary hover:bg-bg_hover rounded-lg transition-transform transform hover:scale-105 shadow-md hover:shadow-lg"
        onClick={() => setActivePage("CreatePost")}>
          <AddCircleIcon className="mr-4 text-gray-200 transition-colors group-hover:text-white" />
          <span className="text-lg font-semibold">Create Post</span>
        </button>
        <button className="w-full flex items-center px-4 py-3 text-white bg-bg_primary hover:bg-bg_hover rounded-lg transition-transform transform hover:scale-105 shadow-md hover:shadow-lg">
          <BookmarkIcon className="mr-4 text-gray-200 transition-colors group-hover:text-white" />
          <span className="text-lg font-semibold">Saved</span>
        </button>
      </nav>
      <button className="w-full flex items-center px-4 py-3 text-white bg-[#f84c2e] hover:bg-[#ff4400] rounded-lg transition-transform transform hover:scale-105 shadow-md hover:shadow-lg mt-4">
        <LogoutIcon className="mr-4 text-gray-200 transition-colors group-hover:text-white" />
        <span className="text-lg font-semibold">Logout</span>
      </button>
    </div>

  );
};

export default SideNavBar;
