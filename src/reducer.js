import { combineReducers } from "@reduxjs/toolkit";

const countReducer = (state = 0, action) => {
  // For demonstration, this reducer simply increments the count by 1 for every action
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    default:
      return state;
  }
};

const rootReducer = combineReducers({ count: countReducer });
export default rootReducer;
