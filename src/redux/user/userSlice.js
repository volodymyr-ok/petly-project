import { createSlice } from "@reduxjs/toolkit";
import { Notify } from "notiflix";
import { updateAvatars } from "./user-operations";

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleFulfilled = (state, action) => {
  state.avatar = action.payload.avatarURL;
  Notify.success(`You have successfully updated your avatar`);
  state.isLoading = false;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  Notify.failure(`An error occurred. Please try again later`);
  state.error = action.payload;
  state.avatar = "";
};

const userSlice = createSlice({
  name: "user",
  initialState: {
    avatar: "",
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(updateAvatars.pending, handlePending);
    builder.addCase(updateAvatars.fulfilled, handleFulfilled);
    builder.addCase(updateAvatars.rejected, handleRejected);
  },
});

export const userReducer = userSlice.reducer;
