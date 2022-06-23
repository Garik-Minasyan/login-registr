import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
  registerUsers: [],
};

const adminSlice = createSlice({
  name: "registerUsers",
  initialState: defaultState,
  reducers: {
    register(state: any, action: any) {
      state.registerUsers = [...state.registerUsers, action.payload];
    },
  },
});

export default adminSlice.reducer;

export const { register } = adminSlice.actions;
