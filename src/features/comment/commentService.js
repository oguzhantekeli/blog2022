import axios from "axios";
const API_URL = "https://mern-backend-blog2022.herokuapp.com/api/comments/";
// const API_URL = "http://localhost:5000/api/comments/";

//get all comments
const getComments = async (blogId) => {
  const response = await axios.get(API_URL + blogId);
  return response.data;
};
//post new comment
const addComment = async (blogData) => {
  const config = {
    headers: {
      Authorization: `Bearer ${blogData.token}`,
    },
  };
  const response = await axios.post(
    API_URL + blogData.blogId,
    blogData,
    config
  );
  return response.data;
};
//update a comment
const updateComment = async (id) => {
  const response = await axios.post();
  return response.data;
};
//delete a comment
const deleteComment = async (id) => {
  const response = await axios.post();
  return response.data;
};

const commentService = {
  getComments,
  addComment,
  updateComment,
  deleteComment,
};
export default commentService;
