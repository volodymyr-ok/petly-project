import { createSlice } from "@reduxjs/toolkit";
import { Notify } from "notiflix";
import {
  addNotice,
  getNotice,
  getNoticeById,
  getNoticesBySearch,
  getNoticesPrivate,
  getNoticesPublic,
  removeNotice,
  updateNotice,
  updateNoticeAvatar,
} from "./notice-operations";

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleFulfilled = (state, action) => {
  console.log(action.payload);
  // state.items = action.payload;
  state.isLoading = false;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  state.items = [];
  Notify.failure(`An error occurred, please try again`);
};

const noticeSlice = createSlice({
  name: "notice",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getNotice.pending, handlePending)
      .addCase(getNotice.rejected, handleRejected)
      .addCase(getNotice.fulfilled, (state, action) => {
        state.items = action.payload;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(getNoticesPublic.pending, handlePending)
      .addCase(getNoticesPublic.rejected, handleRejected)
      .addCase(getNoticesPublic.fulfilled, (state, action) => {
        state.items = action.payload;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(getNoticesPrivate.pending, handlePending)
      .addCase(getNoticesPrivate.rejected, handleRejected)
      .addCase(getNoticesPrivate.fulfilled, (state, action) => {
        state.items = action.payload;
        state.error = null;
        state.isLoading = false;
      })

      .addCase(getNoticeById.pending, handlePending)
      .addCase(getNoticeById.fulfilled, handleFulfilled)
      .addCase(getNoticeById.rejected, handleRejected)

      .addCase(getNoticesBySearch.pending, handlePending)
      .addCase(getNoticesBySearch.fulfilled, handleFulfilled)
      .addCase(getNoticesBySearch.rejected, handleRejected)

      .addCase(updateNotice.pending, handlePending)
      .addCase(updateNotice.rejected, handleRejected)
      .addCase(updateNotice.fulfilled, (state, action) => {
        const result = state.items.filter(
          (el) => el._id !== action.payload._id
        );
        state.items = [action.payload, ...result];
        state.isLoading = false;
        state.error = null;
      })

      .addCase(updateNoticeAvatar.pending, handlePending)
      .addCase(updateNoticeAvatar.rejected, handleRejected)
      .addCase(updateNoticeAvatar.fulfilled, (state, action) => {
        const result = state.items.filter(
          (el) => el._id !== action.payload._id
        );
        state.items = [action.payload, ...result];
        state.isLoading = false;
        state.error = null;
      })

      .addCase(addNotice.pending, handlePending)
      .addCase(addNotice.rejected, handleRejected)
      .addCase(addNotice.fulfilled, (state, action) => {
        state.items.unshift(action.payload);
        state.error = null;
        state.isLoading = false;
      })

      .addCase(removeNotice.pending, handlePending)
      .addCase(removeNotice.rejected, handleRejected)
      .addCase(removeNotice.fulfilled, (state, action) => {
        console.log("action.payload", action.payload);
        state.error = null;
        state.isLoading = false;
        state.items = state.items.filter((el) => el._id !== action.payload);
      });
  },
});

export const noticeReducer = noticeSlice.reducer;
