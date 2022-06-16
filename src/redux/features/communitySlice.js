import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  communityModal: false,
  communities: [],
  posts: [],
};

const communitySlice = createSlice({
  name: "community",
  initialState,
  reducers: {
    openCommunityModal: (state) => {
      state.communityModal = true;
    },

    closeCommunityModal: (state) => {
      state.communityModal = false;
    },

    getCommunities: (state, action) => {
      state.communities = action.payload;
    },

    getPosts: (state, action) => {
      state.posts = action.payload;
    },
  },
});

export const {
  openCommunityModal,
  closeCommunityModal,
  getCommunities,
  getPosts,
} = communitySlice.actions;

export default communitySlice.reducer;
