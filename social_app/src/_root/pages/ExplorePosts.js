import React, { useState } from "react";
import {UpdatedUnionPostsDummy} from './Dummy.js';

const ExplorePosts = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  const handleCloseModal = () => {
    setSelectedPost(null);
  };

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-gradient-to-t from-orange-200 to-orange-50 min-h-screen">
      {UpdatedUnionPostsDummy.map((post) => (
        <div
          key={post.id}
          onClick={() => handlePostClick(post)}
          className="cursor-pointer bg-white shadow-md rounded-lg overflow-hidden transform transition duration-200 hover:scale-105"
        >
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-56 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-bold text-gray-800 truncate">
              {post.title}
            </h2>
            <p className="text-sm text-gray-600 mt-2 line-clamp-3">
              {post.content}
            </p>
            <div className="flex items-center mt-4">
              <img
                src={post.author.profileImage}
                alt={post.author.name}
                className="h-8 w-8 rounded-full border-2 border-orange-400"
              />
              <p className="text-sm text-gray-700 ml-3 font-medium">
                {post.author.name}
              </p>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              {new Date(post.timestamp).toLocaleString()}
            </p>
          </div>
        </div>
      ))}

      {selectedPost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out">
          <div
            className="bg-white rounded-lg overflow-hidden shadow-lg w-11/12 md:w-3/4 lg:w-1/2 transform transition-transform duration-300 ease-in-out scale-95"
            style={{ animation: "fadeIn 0.3s ease-in-out forwards" }}
          >
            <div className="relative">
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600"
              >
                Close
              </button>
              <img
                src={selectedPost.imageUrl}
                alt={selectedPost.title}
                className="w-full h-80 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  {selectedPost.title}
                </h2>
                <p className="text-sm text-gray-600 mt-4">{selectedPost.content}</p>
                <div className="flex items-center mt-6">
                  <img
                    src={selectedPost.author.profileImage}
                    alt={selectedPost.author.name}
                    className="h-12 w-12 rounded-full border-2 border-orange-400"
                  />
                  <p className="text-lg text-gray-700 ml-4 font-medium">
                    {selectedPost.author.name}
                  </p>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  {new Date(selectedPost.timestamp).toLocaleString()}
                </p>
                <div className="flex flex-wrap mt-4">
                  {selectedPost.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs text-white bg-orange-500 px-3 py-1 rounded-full mr-2 mb-2"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExplorePosts;
