import React from 'react';
import { Link } from 'react-router-dom';
import { peopleSuggestion } from './Dummy';

const People = () => {
  return (
    <div className="p-6 bg-gradient-to-t from-orange-200 to-orange-50 min-h-screen">
      <h1 className="text-3xl font-extrabold text-center text-orange-600 mb-8">People You May Know</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {peopleSuggestion.map((person) => (
          <div
            key={person.id}
            className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 ease-in-out"
          >
            <img
              src={person.profileImage}
              alt={person.name}
              className="w-24 h-24 rounded-full mb-4 object-cover"
            />
            <h2 className="text-xl font-semibold text-gray-800">{person.name}</h2>
            <p className="text-center text-gray-600 text-sm mt-2">{person.bio}</p>
            <p className="text-center text-gray-500 text-sm mt-1">{person.mutualFriends} Mutual Friends</p>

            {/* Button to view profile */}
            <Link to={`/profile/${person.id}`}>
              <button className="mt-4 px-6 py-2 text-white bg-orange-600 hover:bg-orange-700 rounded-full transition-colors duration-200 ease-in-out">
                View Profile
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default People;
