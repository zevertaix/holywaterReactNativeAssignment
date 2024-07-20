import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import sleep from "../../helpers/sleep";
import { fetchBooks } from "../../api/discover";
import { RootState } from "../store";
import { BookResponse } from "../../api/discover/types";

interface InitialState {
  bookList: BookResponse | null;
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
  bookList: null,
  queryStatuses: {},
};

export const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setBookList: (state, action) => {
      state.bookList = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooksList.fulfilled, (state, action) => {
        state.bookList = action.payload;
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
export const selectBookList = (state: RootState) => state.books.bookList;
