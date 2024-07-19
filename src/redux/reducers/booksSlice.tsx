import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import sleep from "../../helpers/sleep";
import { fetchBooks } from "../../api/discover";
import { RootState } from "../store";

interface InitialState {
  queryStatuses: {
    booksLoading?: boolean;
  };
}

export const fetchBooksList = createAsyncThunk("books/books", async (_) => {
  await sleep(1000);
  const response = fetchBooks();
  return response;
});

const initialState: InitialState = {
  queryStatuses: {},
};

export const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooksList.fulfilled, (state) => {
        state.queryStatuses.booksLoading = false;
      })
      .addCase(fetchBooksList.pending, (state) => {
        state.queryStatuses.booksLoading = true;
      })
      .addCase(fetchBooksList.rejected, (state) => {
        state.queryStatuses.booksLoading = false;
      });
  },
});

export const selectBookStatuses = (state: RootState) =>
  state.books.queryStatuses;
