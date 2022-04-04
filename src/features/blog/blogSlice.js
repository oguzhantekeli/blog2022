import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import blogService from "./blogService";

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
  isLoadingBlog: false,
  isErrorBlog: false,
  isSuccessBlog: false,
  messageBlog: "",
  blogs: [],
  blog: {
    id: "",
    title: "",
    text: "",
    author: "",
    updatedAt: "",
    imageBigUrl: "",
    imageThumbUrl: "",
    category: "",
    tags: "",
  },
};

//get all blogs
export const getBlogs = createAsyncThunk("blog/getBlogs", async (thunkAPI) => {
  try {
    return await blogService.getBlogs();
  } catch (error) {
    const message =
      (error.response.data && error.response && error.response.data.message) ||
      error.message ||
      error;
    return thunkAPI.rejectWithValue(message);
  }
});

//get single blog post
export const getBlog = createAsyncThunk(
  "blog/getBlog",
  async (id, thunkAPI) => {
    try {
      return await blogService.getBlog(id);
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

//create new blog
export const createNewBlog = createAsyncThunk(
  "blog/createNewBlog",
  async (blogData, thunkAPI) => {
    try {
      return await blogService.createNewBlog(blogData);
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

//update blog post
export const updateBlog = createAsyncThunk(
  "blog/updateBlog",
  async (blogItemData, thunkAPI) => {
    try {
      return await blogService.updateBlog(blogItemData);
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
//update user blogs for user name change
export const updateUserBlogs = createAsyncThunk(
  "blog/updateUserBlogs",
  async (authorNamesForBlogs, thunkAPI) => {
    try {
      return await blogService.updateUserBlogs(authorNamesForBlogs);
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

//delete blog post
export const deleteBlog = createAsyncThunk(
  "blog/deleteBlog",
  async (blogItemData, thunkAPI) => {
    try {
      return await blogService.deleteBlog(blogItemData);
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

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
      state.isLoadingBlog = false;
      state.isErrorBlog = false;
      state.isSuccessBlog = false;
      state.messageBlog = "";
      state.blogs = [];
      state.blog = {
        title: "",
        text: "",
        author: "",
        email: "",
        registered: "",
        imageBigUrl: "",
        imageThumbUrl: "",
        category: "",
        tags: "",
      };
    },
  },
  extraReducers: (builder) => {
    builder
      //create new blog case
      .addCase(createNewBlog.pending, (state) => {
        state.isLoadingBlog = true;
      })
      .addCase(createNewBlog.fulfilled, (state, action) => {
        state.isLoadingBlog = false;
        state.isSuccessBlog = true;
        state.blog = action.payload;
      })
      .addCase(createNewBlog.rejected, (state, action) => {
        state.isLoadingBlog = false;
        state.isErrorBlog = true;
        state.messageBlog = action.payload;
      })
      //getblogs case
      .addCase(getBlogs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.blogs = action.payload;
      })
      .addCase(getBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.blogs = action.payload;
      })
      //get single blog
      // .addCase(getBlog.pending, (state) => {
      //   state.messageBlog = "blog coming..";
      // })
      .addCase(getBlog.fulfilled, (state, action) => {
        state.isLoadingBlog = false;
        state.blog = action.payload;
      })
      .addCase(getBlog.rejected, (state, action) => {
        state.isErrorBlog = true;
        state.isLoadingBlog = false;
        state.messageBlog = action.payload;
      })
      //update blog case
      .addCase(updateBlog.pending, (state) => {
        state.isLoadingBlog = true;
      })
      .addCase(updateBlog.fulfilled, (state, action) => {
        state.isLoadingBlog = false;
        state.isSuccessBlog = true;
        state.blog = action.payload;
      })
      .addCase(updateBlog.rejected, (state, action) => {
        state.isLoadingBlog = false;
        state.isErrorBlog = true;
        state.messageBlog = action.payload;
      });
    //delete blog case
    // .addCase(deleteBlog.pending, (state) => {
    //   state.isLoadingBlog = true;
    // })
    // .addCase(deleteBlog.fulfilled, (state, action) => {
    // state.isLoadingBlog = false;
    // state.isSuccessBlog = true;
    // state.messageBlog = action.payload;
    // })
    // .addCase(deleteBlog.rejected, (state, action) => {
    // state.isLoadingBlog = false;
    // state.isErrorBlog = true;
    // state.messageBlog = action.payload;
    // });
  },
});

export const { reset } = blogSlice.actions;
export default blogSlice.reducer;
