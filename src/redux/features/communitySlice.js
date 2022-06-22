import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  communityModal: false,
  communities: [],
  singleCommunity: {},
  posts: [],
  communityPosts: [],
  snippets: [],
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

    getCommunityPosts: (state, action) => {
      state.communityPosts = action.payload;
    },

    getCommunitySnippets: (state, action) => {
      state.snippets = action.payload;
    },

    fetchSingleCommunity: (state, action) => {
      state.singleCommunity = action.payload;
    },

    addSnippet: (state, action) => {
      state.snippets = [...state.snippets, action.payload];
    },

    deleteSnippet: (state, action) => {
      state.snippets = state.snippets.filter(
        (snippet) => snippet.communityId !== action.payload
      );
    },
  },
});

export const {
  openCommunityModal,
  closeCommunityModal,
  getCommunities,
  getPosts,
  getCommunityPosts,
  getCommunitySnippets,
  fetchSingleCommunity,
  addSnippet,
  deleteSnippet,
} = communitySlice.actions;

export default communitySlice.reducer;
