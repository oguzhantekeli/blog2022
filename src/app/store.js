import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import blogReducer from "../features/blog/blogSlice";
import commentReducer from "../features/comment/commentSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    blog: blogReducer,
    comment: commentReducer,
  },
});
