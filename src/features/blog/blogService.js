import axios from "axios";

const API_URL = "http://localhost:5000/api/blogs/";

//get all blogs from mongodb
const getBlogs = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

//get single blog data from mongodb
const getBlog = async (id) => {
  const response = await axios.get(API_URL + id);
  return response.data;
};

//update blog data from mongodb
const updateBlog = async (id, blogItemData) => {
  const response = await axios.post(API_URL + id, blogItemData);
  return response.data;
};

//delete blog from mongodb
const deleteBlog = async (id) => {
  const response = await axios.post(API_URL + id);
  return response.data;
};

const blogService = {
  getBlogs,
  getBlog,
  updateBlog,
  deleteBlog,
};

export default blogService;
