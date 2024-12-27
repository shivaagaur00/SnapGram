import React, { useState } from 'react';
import userData from './Dummy';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const UserProfile = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [showFollowers, setShowFollowers] = useState(false);
  const [showFollowing, setShowFollowing] = useState(false);
  const [showComments, setShowComments] = useState(null); // For viewing comments
  const [followers, setFollowers] = useState(userData.followers);
  const [following, setFollowing] = useState(userData.following);

  // State for managing likes
  const [posts, setPosts] = useState(userData.posts);

  const { name, username, profilePhoto, bio } = userData;

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  const handleCloseModal = () => {
    setSelectedPost(null);
  };

  const handleUnfollow = (userId) => {
    setFollowing(following.filter((user) => user.id !== userId));
  };

  const handleRemoveFollower = (userId) => {
    setFollowers(followers.filter((user) => user.id !== userId));
  };

  const handleLikeToggle = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? {
              ...post,
              isLiked: !post.isLiked,
              likeCount: post.isLiked ? post.likeCount - 1 : post.likeCount + 1,
            }
          : post
      )
    );
  };

  const handleViewComments = (postId) => {
    const post = posts.find((p) => p.id === postId);
    setShowComments(post);
  };

  return (
    <div className="w-full max-w-4xl bg-gradient-to-t from-orange-200 to-orange-50 shadow-lg rounded-lg p-8 mx-auto">
      {/* User Info */}
      <div className="flex items-center space-x-6 mb-8">
        <img
          src={profilePhoto}
          alt={`${name}'s profile`}
          className="w-20 h-20 rounded-full border-4 border-orange-500"
        />
        <div>
          <h1 className="text-3xl font-semibold text-gray-800">{name}</h1>
          <h2 className="text-lg text-gray-500">@{username}</h2>
          <p className="text-gray-600 mt-2">{bio}</p>
          <div className="mt-4 flex space-x-8">
            <div
              className="text-center cursor-pointer"
              onClick={() => setShowFollowers(true)}
            >
              <p className="text-lg font-semibold">{followers.length}</p>
              <p className="text-sm text-gray-500">Followers</p>
            </div>
            <div
              className="text-center cursor-pointer"
              onClick={() => setShowFollowing(true)}
            >
              <p className="text-lg font-semibold">{following.length}</p>
              <p className="text-sm text-gray-500">Following</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Posts */}
      <div className="mt-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Recent Posts</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="border rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 cursor-pointer"
            >
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
                onClick={() => handlePostClick(post)}
              />
              <h4 className="text-lg font-medium text-gray-800 truncate">{post.title}</h4>
              <p className="text-gray-600 text-sm mt-2">{post.content}</p>
              <div className="flex justify-between items-center text-gray-500 mt-4">
                <button
                  className={`flex items-center space-x-1 ${
                    post.isLiked ? 'text-red-500' : ''
                  }`}
                  onClick={() => handleLikeToggle(post.id)}
                >
                  {post.isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                  <span>{post.likeCount} Likes</span>
                </button>
                <button
                  onClick={() => handleViewComments(post.id)}
                  className="text-blue-500 hover:underline"
                >
                  {post.commentCount} Comments
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Comments Modal */}
      {showComments && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-96 p-6">
            <h2 className="text-2xl font-bold mb-4">Comments</h2>
            <ul>
              {showComments.comments.map((comment, index) => (
                <li key={index} className="mb-2">
                  <span className="font-medium">{comment.user}: </span>
                  <span>{comment.text}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setShowComments(null)}
              className="mt-4 bg-gray-300 px-4 py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Followers Modal */}
      {showFollowers && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-96 p-6">
            <h2 className="text-2xl font-bold mb-4">Followers</h2>
            <ul>
              {followers.map((follower) => (
                <li
                  key={follower.id}
                  className="flex justify-between items-center mb-2"
                >
                  <span>{follower.name}</span>
                  <button
                    onClick={() => handleRemoveFollower(follower.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setShowFollowers(false)}
              className="mt-4 bg-gray-300 px-4 py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Following Modal */}
      {showFollowing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-96 p-6">
            <h2 className="text-2xl font-bold mb-4">Following</h2>
            <ul>
              {following.map((followed) => (
                <li
                  key={followed.id}
                  className="flex justify-between items-center mb-2"
                >
                  <span>{followed.name}</span>
                  <button
                    onClick={() => handleUnfollow(followed.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600"
                  >
                    Unfollow
                  </button>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setShowFollowing(false)}
              className="mt-4 bg-gray-300 px-4 py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
