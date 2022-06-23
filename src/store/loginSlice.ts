import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    login: (state: any, action: any) => {
      state.user = action.payload;
    },
    logout: (state: any) => {
      state.user = null;
    },
  },
});

export const { login, logout } = loginSlice.actions;
export const selectUser = (state: any) => state.user;
export default loginSlice.reducer;
