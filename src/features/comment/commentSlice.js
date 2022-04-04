import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import commentService from "../comment/commentService";
const initialState = {
  comments: [],
  comment: [],
  isErrorComments: false,
  isLoadingComment: false,
  isSuccessComment: false,
  messageComments: "",
};

export const getComments = createAsyncThunk(
  "comment/getComments",
  async (blogId, thunkAPI) => {
    try {
      return await commentService.getComments(blogId);
    } catch (error) {
      const message =
        (error.response.data &&
          error.response &&
          error.response.data.message) ||
        error.message ||
        error;
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const addComment = createAsyncThunk(
  "comment/addComment",
  async (blogData, thunkAPI) => {
    try {
      return await commentService.addComment(blogData);
    } catch (error) {
      const message =
        (error.response.data &&
          error.response &&
          error.response.data.message) ||
        error.message ||
        error;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    reset: (state) => {
      state.comments = [];
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      //get all comments case
      // .addCase(getComments.pending, (state) => {
      //   state.messageComments = "comments loading";
      // })
      .addCase(getComments.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(getComments.rejected, (state, action) => {
        state.messageComments = action.payload;
        state.isErrorComments = true;
        state.comments = [];
      })
      //add new comment case
      .addCase(addComment.pending, (state) => {
        state.isLoadingComment = true;
      })
      .addCase(addComment.fulfilled, (state, action) => {
        state.comment = action.payload;
        state.isLoadingComment = false;
        state.isSuccessComment = true;
      })
      .addCase(addComment.rejected, (state, action) => {
        state.isLoadingComment = false;
        state.messageComments = action.payload;
        state.isErrorComments = true;
        state.comment = [];
      });
  },
});

export const { reset } = commentSlice.actions;
export default commentSlice.reducer;
