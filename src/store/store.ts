import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import registerSlice from "./registerSlice";
import loginSlice from "./loginSlice";

const reducer = combineReducers({
  register: registerSlice,
  login: loginSlice,
});

const store = configureStore({
  reducer,
});

export default store;
