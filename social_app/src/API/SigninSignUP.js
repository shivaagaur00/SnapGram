import axios from "axios";
const URL = "http://localhost:3000";

// API to register a user
export const registerUser = async (data) => {
  try {
    // Log the data to the console instead of sending a POST request
    console.log("Registration Data:", data);

    // Uncomment the line below to actually make a POST request
    // let res = await axios.post(`${URL}/Authentication/register`, data);
    
    // For now, return a mock response
    return { data: { message: "User registered successfully" } };  // Mock response for testing
  } catch (error) {
    console.error("Error registering user:", error);
  }
};

// API to log in a user
export const loginUser = async (data) => {
  try {
    // Log the data to the console instead of sending a POST request
    console.log("Login Data:", data);

    // Uncomment the line below to actually make a POST request
    // let res = await axios.post(`${URL}/Authentication/login`, data);
    // return res;

  } catch (error) {
    console.error("Error logging in user:", error);
  }
};
