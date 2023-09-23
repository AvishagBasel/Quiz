import { configureStore } from "@reduxjs/toolkit";
import usersPoints from "./usersPoints";

const store = configureStore({
  reducer: usersPoints,
});

export default store;
