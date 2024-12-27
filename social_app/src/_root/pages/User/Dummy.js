import img1 from '../../../Assets/pexels-alena-koval-233944-886521.jpg';
import img2 from '../../../Assets/pexels-francesco-ungaro-2325447.jpg';
import img3 from '../../../Assets/pexels-philippedonn-1133957.jpg';
import logo from '../../../Assets/Logo.png';

const userData = {
  id: "12345",
  name: "John Doe",
  username: "john_doe",
  profilePhoto: logo,
  bio: "Web Developer | Tech Enthusiast | Blogger",
  followersCount: 1200,
  followingCount: 500,
  posts: [
    {
      id: "post_001",
      title: "Exploring new technologies!",
      content: "Sharing my excitement about learning new and upcoming technologies in the industry.",
      author: {
        name: "John Doe",
        profileImage: logo,
      },
      timestamp: "2024-12-24T14:30:00Z",
      tags: ["technology", "learning"],
      imageUrl: img2,
      likeCount: 150,
      commentCount: 25,
      likedByUser: false,
    },
    {
      id: "post_002",
      title: "Amazing sunset view at the beach.",
      content: "Captured this beautiful sunset at the beach. It was an amazing experience!",
      author: {
        name: "John Doe",
        profileImage: logo,
      },
      timestamp: "2024-12-22T18:15:00Z",
      tags: ["sunset", "beach"],
      imageUrl: img2,
      likeCount: 200,
      commentCount: 40,
      likedByUser: true,
    },
    {
      id: "post_003",
      title: "Just finished a new project!",
      content: "I completed a new project recently and I couldn't be more proud of it. Check it out!",
      author: {
        name: "John Doe",
        profileImage: logo,
      },
      timestamp: "2024-12-20T09:45:00Z",
      tags: ["project", "coding"],
      imageUrl: img1,
      likeCount: 350,
      commentCount: 60,
      likedByUser: false,
    },
    {
      id: "post_004",
      title: "Just finished a new project!",
      content: "Another project milestone achieved! Excited to share it with the community.",
      author: {
        name: "John Doe",
        profileImage: logo,
      },
      timestamp: "2024-12-20T09:45:00Z",
      tags: ["project", "achievement"],
      imageUrl: img3,
      likeCount: 350,
      commentCount: 60,
      likedByUser: false,
    },
  ],
  followers: [
    { id: "follower_001", name: "Alice Smith", username: "alice_smith" },
    { id: "follower_002", name: "Bob Johnson", username: "bob_johnson" },
    { id: "follower_003", name: "Charlie Brown", username: "charlie_brown" },
  ],
  following: [
    { id: "following_001", name: "Dave White", username: "dave_white" },
    { id: "following_002", name: "Eve Green", username: "eve_green" },
    { id: "following_003", name: "Grace Lee", username: "grace_lee" },
  ],
  postsCount: 50,
  totalLikesReceived: 1500,
  additionalInfo: {
    location: "New York, USA",
    website: "https://johndoe.dev",
    joinedDate: "2020-06-15",
    professionalSkills: ["JavaScript", "React", "Node.js", "CSS", "HTML"],
  },
  recentActivity: [
    {
      activityType: "liked",
      target: "post",
      targetId: "post_002",
      timestamp: "2024-12-25T10:30:00Z",
    },
    {
      activityType: "commented",
      target: "post",
      targetId: "post_001",
      timestamp: "2024-12-24T16:00:00Z",
      comment: "Great insights! Really enjoyed reading this.",
    },
    {
      activityType: "followed",
      target: "user",
      targetId: "follower_003",
      timestamp: "2024-12-23T08:45:00Z",
    },
  ],
};

export default userData;
