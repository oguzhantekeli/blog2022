import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import commentService from "../comment/commentService";
const initialState = {
  comments: [],
  isError: false,
  message: "",
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
      .addCase(getComments.pending, (state) => {
        state.message = "comments loading";
      })
      .addCase(getComments.fulfilled, (state, action) => {
        state.message = "comments loaded";
        state.comments = action.payload;
      })
      .addCase(getComments.rejected, (state, action) => {
        state.message = action.payload;
        state.isError = true;
        state.comments = [];
      });
  },
});

export const { reset } = commentSlice.actions;
export default commentSlice.reducer;
