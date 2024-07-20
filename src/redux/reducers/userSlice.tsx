import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { fetchProfile } from "../../api/user";
import { User } from "../../api/user/types";
import sleep from "../../helpers/sleep";
import { Book } from "../../api/discover/types";

export const fetchUserProfile = createAsyncThunk(
  "user/userProfile",
  async (_) => {
    try {
      await sleep(1000);
      const response = fetchProfile();
      return response;
    } catch (err) {
      console.warn(err);
    }
    return null;
  }
);

export type LastBook = {
  book: Book;
  currentChapter: number;
} | null;

interface InitialState {
  userProfile: User | null;
  lastBook: LastBook;
  queryStatuses: {
    fetchProfile: boolean;
  };
}

const initialState: InitialState = {
  userProfile: null,
  lastBook: null,
  queryStatuses: {
    fetchProfile: false,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserProfile: (state, action) => {
      state.userProfile = action.payload;
    },
    setLastBook: (state, action) => {
      state.lastBook = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.queryStatuses.fetchProfile = true;
      })
      .addCase(fetchUserProfile.rejected, (state) => {
        state.queryStatuses.fetchProfile = false;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.userProfile = action.payload;
        state.queryStatuses.fetchProfile = false;
      });
  },
});

export const selectUser = (state: RootState) => state.user.userProfile;
export const selectQueryStatuses = (state: RootState) =>
  state.user.queryStatuses;
export const selectLastBook = (state: RootState) => state.user.lastBook;

export const { setUserProfile, setLastBook } = userSlice.actions;
