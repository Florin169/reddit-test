import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  signUpModal: false,
  signInModal: false,
  userModal: false,
  directoryModal: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    openSignUpModal: (state) => {
      state.signUpModal = true;
    },

    closeSignUpModal: (state) => {
      state.signUpModal = false;
    },

    openSignInModal: (state) => {
      state.signInModal = true;
    },

    closeSignInModal: (state) => {
      state.signInModal = false;
    },

    toggleUserModal: (state) => {
      state.userModal = !state.userModal;
    },

    toggleDirectoryModal: (state) => {
      state.directoryModal = !state.directoryModal;
    },

    getUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const {
  openSignUpModal,
  closeSignUpModal,
  openSignInModal,
  closeSignInModal,
  toggleUserModal,
  toggleDirectoryModal,
  getUser,
} = authSlice.actions;

export default authSlice.reducer;
