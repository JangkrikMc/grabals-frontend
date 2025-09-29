import { createSlice } from "@reduxjs/toolkit";

/**
 * Slice untuk mengelola state autentikasi pengguna
 * Menyimpan informasi login dan data profil pengguna
 */
const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    user: {
      name: "",
      email: "",
      profilePicture: "",
    },
  },
  reducers: {
    // Reducer untuk login pengguna
    login: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    // Reducer untuk logout pengguna
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = {
        name: "",
        email: "",
        profilePicture: "",
      };
    },
    // Reducer untuk memperbarui data profil pengguna
    updateProfile: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },
  },
});

export const { login, logout, updateProfile } = authSlice.actions;
export default authSlice.reducer;