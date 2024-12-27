import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [tags, setTags] = useState('');
  const navigate = useNavigate();
  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleContentChange = (e) => setContent(e.target.value);
  const handleTagsChange = (e) => setTags(e.target.value);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      title,
      content,
      image,
      tags: tags.split(',').map(tag => tag.trim()),
    };

    console.log('New Post:', newPost);
    navigate('/user');
  };

  return (
    <div className="p-6 bg-gradient-to-t from-orange-200 to-orange-50 min-h-screen">
      <h1 className="text-3xl font-extrabold text-center text-orange-600 mb-8">Create a New Post</h1>

      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <div className="mb-6">
          <label htmlFor="title" className="block text-lg font-medium text-gray-700 mb-2">Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={handleTitleChange}
            placeholder="Enter post title"
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="content" className="block text-lg font-medium text-gray-700 mb-2">Content</label>
          <textarea
            id="content"
            value={content}
            onChange={handleContentChange}
            placeholder="Write your post content here"
            rows="6"
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="tags" className="block text-lg font-medium text-gray-700 mb-2">Tags (Comma separated)</label>
          <input
            id="tags"
            type="text"
            value={tags}
            onChange={handleTagsChange}
            placeholder="Enter tags"
            className="w-full p-3 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="image" className="block text-lg font-medium text-gray-700 mb-2">Upload Image</label>
          <input
            id="image"
            type="file"
            onChange={handleImageChange}
            className="w-full p-3 border border-gray-300 rounded-md"
            accept="image/*"
          />
          {image && <img src={image} alt="Post Preview" className="mt-4 w-full max-h-64 object-cover rounded-md" />}
        </div>

        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="px-6 py-3 bg-orange-600 text-white font-semibold rounded-full hover:bg-orange-700 transition duration-200"
          >
            Submit Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
