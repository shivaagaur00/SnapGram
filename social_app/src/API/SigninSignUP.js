import axios from "axios";
const URL = "http://localhost:8000";
export const addUser = async (data) => {
  try {
    console.log(data.length);

    let res = await axios.post(`${URL}/addUser`, data);
    return res;
  } catch (error) {
    console.error("Error registering user:", error);
  }
};
export const getUser = async (data) => {
  try {
    let res = await axios.post(`${URL}/getUser`, data);
    return res;
  } catch (error) {
    console.error("Error logging in user:", error);
  }
};
