import axios from "axios";
const API_URL = "https://mern-backend-blog2022.herokuapp.com/api/comments/";

//get all comments
const getComments = async () => {
  const response = await axios.get(API_URL);
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
  updateComment,
  deleteComment,
};
export default commentService;
