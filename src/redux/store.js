import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/authSlice";
import communitySlice from "./features/communitySlice";
import postSlice from "./features/postSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    community: communitySlice,
    post: postSlice,
  },
});

export default store;
