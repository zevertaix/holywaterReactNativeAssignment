import { combineReducers } from "@reduxjs/toolkit";
import { userSlice } from "./reducers/userSlice";
import { bookSlice } from "./reducers/booksSlice";

const rootReducer = combineReducers({
  user: userSlice.reducer,
  books: bookSlice.reducer,
});

export default rootReducer;
