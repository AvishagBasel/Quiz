import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  usersList: {},
  currentUser: undefined,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setUserName: (state, action) => {
      state.currentUser = action.payload;
      state.usersList[action.payload] = 0;
    },
    increment: (state) => {
      state.usersList[state.currentUser] += 10;
    },
    decrement: (state) => {
      state.usersList[state.currentUser] -= 10;
    },
  },
});

export const { setUserName, increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
