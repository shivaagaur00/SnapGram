import React, { useState } from "react";
import SideNavBar from "./User/NavBar";
import UserProfile from "./User/Profile";
import ExplorePosts from "./ExplorePosts";
import People from "./People";
import CreatePost from "./CreatePost";
import Chats from "./Chats";
const User = () => {
  const [activePage, setActivePage] = useState("UserProfile");

  const renderContent = () => {
    switch (activePage) {
      case "ExplorePosts":
        return <ExplorePosts/>;
      case "People":
        return <People></People>;
        case "CreatePost":
          return <CreatePost/>;
          case "Chats":
            return <Chats/>;
      
      case "UserProfile":
      default:
        return <UserProfile />;
    }
  };

  return (
    <div className="w-full flex bg-gradient-to-t from-[#ff7e5f] to-[#feb47b] animate-fadeIn">
      <SideNavBar setActivePage={setActivePage}  />
      <div className="w-full bg-gradient-to-t from-[#ff7e5f] to-[#feb47b] p-6 overflow-auto ml-80">
        {renderContent()}
      </div>
    </div>
  );
};

export default User;
