import axios from "axios";

const API_URL = "https://mern-backend-blog2022.herokuapp.com/api/blogs/";

//get categories from mongodb
const getCategories = async () => {
  const response = await axios.get(`${API_URL}categories`);
  return response.data;
};

//create new blog post on mongodb
const createNewBlog = async (blogData) => {
  const config = {
    headers: {
      Authorization: `Bearer ${blogData.token}`,
    },
  };
  const response = await axios.post(API_URL, blogData, config);
  return response.data;
};
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
const updateBlog = async (blogItemData) => {
  const config = {
    headers: {
      Authorization: `Bearer ${blogItemData.token}`,
    },
  };
  const response = await axios.put(
    API_URL + blogItemData.id,
    blogItemData,
    config
  );
  return response.data;
};

//delete blog from mongodb
const deleteBlog = async (blogItemData) => {
  const config = {
    headers: {
      Authorization: `Bearer ${blogItemData.token}`,
    },
  };
  const response = await axios.delete(API_URL + blogItemData.id, config);
  return response.data;
};

const blogService = {
  getBlogs,
  getBlog,
  createNewBlog,
  updateBlog,
  deleteBlog,
  getCategories,
};

export default blogService;
