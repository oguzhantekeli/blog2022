import axios from "axios";

const API_URL = "http://localhost:5000/api/users/";

const getUser = async (id) => {
  const response = await axios.get(`${API_URL}user/${id}`);
  if (response) {
    console.log("getuser:", response.data);
    return response.data;
  }
};

const register = async (userData) => {
  const response = await axios.post(API_URL, userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};
const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};
//edit user data
const editUser = async (userData) => {
  const config = {
    headers: {
      Authorization: `Bearer ${userData.token}`,
    },
  };
  const response = await axios.put(API_URL + userData.id, userData, config);
  if (response.data) {
    console.log("response data", response.data);
    return response.data;
  }
};
//change user password
const changePassword = () => {};

//logout
const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  login,
  logout,
  getUser,
  editUser,
  changePassword,
};

export default authService;
