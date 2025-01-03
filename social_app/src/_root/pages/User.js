import React, { useState } from "react";
import SideNavBar from "./User/NavBar";
import UserProfile from "./User/Profile";
import ExplorePosts from "./ExplorePosts";
import People from "./People";
import CreatePost from "./CreatePost";
import Chats from "./Chats";
import Footer from "../../Components/Footer";

const User = () => {
  const [activePage, setActivePage] = useState("UserProfile");

  const renderContent = () => {
    switch (activePage) {
      case "ExplorePosts":
        return <ExplorePosts />;
      case "People":
        return <People />;
      case "CreatePost":
        return <CreatePost />;
      case "Chats":
        return <Chats />;
      case "UserProfile":
      default:
        return <UserProfile />;
    }
  };

  return (
    <div className="w-full flex bg-gradient-to-t from-[#ff6a3d] to-[#ff9e63] animate-fadeIn">
      <SideNavBar setActivePage={setActivePage} />
      <div className="w-full bg-gradient-to-t from-[#ffcc99] to-[#fff2e6] p-6 overflow-auto ml-0 md:ml-[20rem]">
        {renderContent()}
      </div>
      <Footer />
    </div>
  );
};

export default User;
