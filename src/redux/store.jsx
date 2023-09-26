import { configureStore } from "@reduxjs/toolkit";
import usersPoints from "./usersPointsSlice";

const store = configureStore({
  reducer: usersPoints,
});

export default store;
