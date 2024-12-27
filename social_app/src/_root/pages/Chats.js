import React, { useState } from "react";
import { userChats as initialUserChats, peopleSuggestion } from "./Dummy";
import { Delete } from "@mui/icons-material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import WhatshotIcon from "@mui/icons-material/Whatshot";

const calculateStreak = (chats) => {
  if (!chats || chats.length === 0) return 0;

  let streak = 0;
  const sortedChats = [...chats].sort(
    (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
  );
  const uniqueDates = sortedChats.map((chat) =>
    new Date(chat.timestamp).toDateString()
  );
  const dateSet = [...new Set(uniqueDates)];
  let lastDate = new Date(dateSet[0]);
  streak = 1;
  for (let i = 1; i < dateSet.length; i++) {
    const currentDate = new Date(dateSet[i]);
    const dayDifference = (lastDate - currentDate) / (1000 * 60 * 60 * 24);
    if (dayDifference === 1) {
      streak++;
      lastDate = currentDate;
    } else {
      break;
    }
  }
  return streak;
};

const Chats = () => {
  const [userChats, setUserChats] = useState(initialUserChats);
  const [selectedUser, setSelectedUser] = useState(null);
  const [message, setMessage] = useState("");
  const [image, setImage] = useState(null);
  const [showUserList, setShowUserList] = useState(true);

  const handleUserClick = (userId) => {
    setSelectedUser(userId);
    setShowUserList(false);
  };

  const handleBack = () => {
    setShowUserList(true);
    setSelectedUser(null);
  };

  const selectedUserChats = userChats.find(
    (chat) => chat.userId === selectedUser
  );

  const sendMessage = () => {
    if (message.trim()) {
      const newChat = {
        id: Date.now(),
        sender: "me",
        message,
        timestamp: new Date().toISOString(),
      };
      const updatedChats = userChats.map((chat) =>
        chat.userId === selectedUser
          ? { ...chat, chats: [...chat.chats, newChat] }
          : chat
      );
      setUserChats(updatedChats);
      setMessage("");
    }
  };

  const sendImage = (imageFile) => {
    const newChat = {
      id: Date.now(),
      sender: "me",
      message: "[Image]",
      timestamp: new Date().toISOString(),
      image: imageFile,
    };
    const updatedChats = userChats.map((chat) =>
      chat.userId === selectedUser
        ? { ...chat, chats: [...chat.chats, newChat] }
        : chat
    );
    setUserChats(updatedChats);
  };

  const deleteAllChats = () => {
    const updatedChats = userChats.map((chat) =>
      chat.userId === selectedUser ? { ...chat, chats: [] } : chat
    );
    setUserChats(updatedChats);
    setSelectedUser(null);
    setShowUserList(true);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-extrabold text-center text-orange-600 mb-8">
        Chats
      </h1>

      {showUserList ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {peopleSuggestion.map((person) => {
            const userChat = userChats.find(
              (chat) => chat.userId === person.id
            );
            const streak = userChat ? calculateStreak(userChat.chats) : 0;

            return (
              <div
                key={person.id}
                className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => handleUserClick(person.id)}
              >
                <img
                  src={person.profileImage}
                  alt={person.name}
                  className="w-24 h-24 rounded-full mb-4 object-cover"
                />
                <h2 className="text-xl font-semibold text-gray-800">
                  {person.name}
                </h2>
                <p className="text-center text-gray-600 text-sm mt-2">
                  {person.bio}
                </p>
                <div className="text-sm text-green-600 mt-2 flex items-center">
                  <WhatshotIcon className="text-orange-600 mr-2" />
                  <span>Streak: {streak} days</span>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <button
            onClick={handleBack}
            className=" text-red-600 hover:text-red-700 bg-red-100 px-4 py-2 rounded-lg mb-4"
          >
            <ArrowBackIcon /> Back
          </button>

          <h2 className="text-2xl font-bold text-orange-600 mb-4">
            Chat with{" "}
            {peopleSuggestion.find((person) => person.id === selectedUser).name}
          </h2>

          <div className="overflow-y-auto max-h-72 mb-4">
            {selectedUserChats ? (
              selectedUserChats.chats.map((chat) => (
                <div
                  key={chat.id}
                  className={`flex ${
                    chat.sender === selectedUser
                      ? "justify-start"
                      : "justify-end"
                  } mb-3`}
                >
                  <div
                    className={`${
                      chat.sender === selectedUser
                        ? "bg-gray-300 text-gray-800"
                        : "bg-orange-300 text-gray-800"
                    } p-3 rounded-lg max-w-xs`}
                  >
                    {chat.message}
                    {chat.image && (
                      <img
                        src={chat.image}
                        alt="chat image"
                        className="mt-2 w-32 h-32 object-cover"
                      />
                    )}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-600">No chats available.</p>
            )}
          </div>

          <div className="flex items-center">
            <input
              type="text"
              placeholder="Type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="border border-gray-300 p-2 rounded-l-lg w-2/3"
            />
            <button
              onClick={sendMessage}
              className="bg-orange-600 text-white px-4 py-2 rounded-r-lg hover:bg-orange-700 ml-2"
            >
              Send
            </button>
            <label
              htmlFor="file-input"
              className="ml-28 text-white bg-orange-600 hover:bg-orange-700 px-4 py-2 rounded-lg cursor-pointer flex items-center justify-center space-x-2"
            >
              <span>Upload Image/File</span>
            </label>
            <input
              id="file-input"
              type="file"
              onChange={(e) => sendImage(URL.createObjectURL(e.target.files[0]))}
              className="hidden"
            />
          </div>
          <div className="flex items-center">
            <button
              onClick={deleteAllChats}
              className="mt-4 text-red-600 hover:text-red-700 bg-red-100 px-4 py-2 rounded-lg"
            >
              <Delete /> <span className="mt-2">Delete Chats</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chats;
