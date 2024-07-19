import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Platform } from "react-native";
import { RootState } from "../store";
import { fetchProfile } from "../../api/user";
import { User } from "../../api/user/types";
import sleep from "../../helpers/sleep";

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

interface InitialState {
  userProfile: User | null;
  queryStatuses: {
    fetchProfile: boolean;
  };
}

const initialState: InitialState = {
  userProfile: null,
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
export const selectQueryStatuses = (store: RootState) =>
  store.user.queryStatuses;

export const { setUserProfile } = userSlice.actions;
