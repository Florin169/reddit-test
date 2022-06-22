import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  post: {},
  comments: [],
};

const postState = createSlice({
  name: "post",
  initialState,
  reducers: {
    getPost: (state, action) => {
      state.post = action.payload;
    },

    getComments: (state, action) => {
      state.comments = action.payload;
    },
  },
});

export const { getPost, getComments } = postState.actions;

export default postState.reducer;
