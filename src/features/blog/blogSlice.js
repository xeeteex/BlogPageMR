import { createSlice } from "@reduxjs/toolkit";
import { getBlogToLocal, setBlogToLocal } from "../shared/localStorage";

export const blogSlice = createSlice({
  name: "blogSlice",
  initialState: {
    blogs: getBlogToLocal(),
  },
  reducers: {
    addBlogs: (state, action) => {
      state.blogs.push(action.payload);
      setBlogToLocal(state.blogs);
    },

    removeBlog: (state, action) => {
      state.blogs.splice(action.payload, 1);
    },

    updateBlog: (state, action) => {
      state.blogs = state.blogs.map((blog) => {
        return blog.id === action.payload.id ? action.payload : blog;
      });

      setBlogToLocal(state.blogs);
    },
  },
});

export const { addBlogs, removeBlog, updateBlog } = blogSlice.actions;
