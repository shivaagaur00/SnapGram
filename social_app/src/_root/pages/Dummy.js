// Dummy.js

import img1 from '../../Assets/pexels-alena-koval-233944-886521.jpg';
import img2 from '../../Assets/pexels-francesco-ungaro-2325447.jpg';
import logo from '../../Assets/Logo.png';
import userData from './User/Dummy';

// Existing data for posts and people suggestion
const UnionPostsDummy = [
  {
    id: 1,
    title: "Welcome to CodeBusters!",
    content:
      "We are thrilled to announce our new semester activities. Join us to enhance your coding skills and collaborate with like-minded peers.",
    author: {
      name: "John Doe",
      profileImage: logo,  // Replace with logo
    },
    timestamp: "2024-12-27T10:30:00Z",
    tags: ["announcement", "community"],
    imageUrl: img1,  // Replace with img1
  },
  {
    id: 2,
    title: "Competitive Programming Tips",
    content:
      "Struggling with dynamic programming? Check out our latest blog post with top tips and resources to master it!",
    author: {
      name: "Jane Smith",
      profileImage: logo,  // Replace with logo
    },
    timestamp: "2024-12-26T15:45:00Z",
    tags: ["programming", "tips"],
    imageUrl: img2,  // Replace with img2
  },
  {
    id: 3,
    title: "Hackathon Alert!",
    content:
      "Mark your calendars! Our annual HackGLA is scheduled for January 15, 2025. Collaborate, innovate, and win exciting prizes!",
    author: {
      name: "Emily Carter",
      profileImage: logo,  // Replace with logo
    },
    timestamp: "2024-12-25T09:00:00Z",
    tags: ["hackathon", "events"],
    imageUrl: img1,  // Replace with img1
  },
];

// User posts map
const userPosts = userData.posts.map((post, index) => ({
  id: UnionPostsDummy.length + index + 1,
  title: post.title,
  content: post.content,
  author: {
    name: post.author.name,
    profileImage: logo,  // Replace with logo for all user posts
  },
  timestamp: post.timestamp,
  tags: post.tags,
  imageUrl: img2,  // Replace with img2 for all user posts
}));

const UpdatedUnionPostsDummy = [...UnionPostsDummy, ...userPosts];

// People suggestion data
const peopleSuggestion = [
  {
    id: 1,
    name: "Michael Adams",
    profileImage: img1,
    bio: "Passionate about coding and teaching others. Loves to solve complex problems and mentor students.",
    mutualFriends: 10,
  },
  {
    id: 2,
    name: "Samantha Lee",
    profileImage: img2,
    bio: "Full stack developer with a focus on web technologies. Loves contributing to open-source projects.",
    mutualFriends: 5,
  },
  {
    id: 3,
    name: "David Wong",
    profileImage: logo,
    bio: "Computer science enthusiast and aspiring software engineer. Always open to new collaborations.",
    mutualFriends: 7,
  },
  {
    id: 4,
    name: "Olivia Green",
    profileImage: img1,
    bio: "Tech lover and entrepreneur. Currently working on building the next big thing in AI.",
    mutualFriends: 8,
  },
];

// New chat data structure for each user, with streak and last chat timestamp
const userChats = [
  {
    userId: 1,

    lastChatTimestamp: "2024-12-27T10:40:00Z", // Last chat timestamp
    chats: [
      {
        id: 1,
        sender: 1,
        receiver: 2,
        message: "Hey, are you joining the Hackathon next week?",
        timestamp: "2024-12-27T10:35:00Z",
        readStatus: false,
      },
      {
        id: 2,
        sender: 2,
        receiver: 1,
        message: "Yes, I'm excited! Looking forward to collaborating with you.",
        timestamp: "2024-12-27T10:40:00Z",
        readStatus: true,
      },
    ],
  },
  {
    userId: 2,
    lastChatTimestamp: "2024-12-26T16:05:00Z",
    chats: [
      {
        id: 3,
        sender: 2,
        receiver: 3,
        message: "I just submitted my project for the Hackathon. What about you?",
        timestamp: "2024-12-26T16:00:00Z",
        readStatus: true,
      },
      {
        id: 4,
        sender: 3,
        receiver: 2,
        message: "I’ll submit mine tomorrow. Can’t wait to see your project!",
        timestamp: "2024-12-26T16:05:00Z",
        readStatus: false,
      },
      {
        id: 5,
        sender: 3,
        receiver: 2,
        message: "I’ll submit mine tomorrow. Can’t wait to see your project!",
        timestamp: "2025-12-26T16:05:00Z",
        readStatus: false,
      },
    ],
  },
  {
    userId: 3,
    lastChatTimestamp: "2024-12-25T09:20:00Z",
    chats: [
      {
        id: 5,
        sender: 3,
        receiver: 1,
        message: "Hello! I saw your post about the new semester activities. Count me in!",
        timestamp: "2024-12-25T09:15:00Z",
        readStatus: true,
      },
      {
        id: 6,
        sender: 1,
        receiver: 3,
        message: "Glad to have you on board! Let's make this semester awesome.",
        timestamp: "2024-12-25T09:20:00Z",
        readStatus: true,
      },
      {
        id: 7,
        sender: 3,
        receiver: 1,
        message: "By the way, do you have any recommendations for coding challenges?",
        timestamp: "2024-12-26T09:00:00Z",
        readStatus: false,
      },
      {
        id: 8,
        sender: 1,
        receiver: 3,
        message: "Definitely! Check out Codeforces and LeetCode. They have great challenges to improve your skills.",
        timestamp: "2024-12-26T09:10:00Z",
        readStatus: true,
      },
      {
        id: 9,
        sender: 3,
        receiver: 1,
        message: "Awesome! I'll start practicing today. Thanks for the suggestion.",
        timestamp: "2024-12-27T10:05:00Z",
        readStatus: false,
      },
      {
        id: 10,
        sender: 1,
        receiver: 3,
        message: "No problem! Let me know if you need help with anything. Good luck!",
        timestamp: "2024-12-27T10:10:00Z",
        readStatus: true,
      },
      {
        id: 11,
        sender: 3,
        receiver: 1,
        message: "Hey! How's the hackathon prep going?",
        timestamp: "2024-12-28T08:50:00Z",
        readStatus: false,
      },
      {
        id: 12,
        sender: 1,
        receiver: 3,
        message: "Going great! I'm working on a cool project for it. How about you?",
        timestamp: "2024-12-28T09:05:00Z",
        readStatus: true,
      },
      {
        id: 13,
        sender: 3,
        receiver: 1,
        message: "I'm brainstorming some ideas. Let's collaborate once we start!",
        timestamp: "2024-12-29T09:20:00Z",
        readStatus: false,
      },
    ],
  },
];



// Export data for use in other components
export { UpdatedUnionPostsDummy, peopleSuggestion, userChats };
