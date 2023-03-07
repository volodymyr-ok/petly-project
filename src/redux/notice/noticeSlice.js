import { createSlice } from "@reduxjs/toolkit";
import { Notify } from "notiflix";
import {
  addNotice,
  getNotice,
  getNoticeById,
  getNoticesBySearch,
  getNoticesPrivate,
  getNoticesPublic,
  updateNotice,
  updateNoticeAvatar,
} from "./notice-operations";

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleFulfilled = (state, action) => {
  state.items = action.payload;
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
      .addCase(updateNotice.fulfilled, handleFulfilled)
      .addCase(updateNotice.rejected, handleRejected)

      .addCase(updateNoticeAvatar.pending, handlePending)
      .addCase(updateNoticeAvatar.fulfilled, handleFulfilled)
      .addCase(updateNoticeAvatar.rejected, handleRejected)

      .addCase(addNotice.pending, handlePending)
      .addCase(addNotice.rejected, handleRejected)
      .addCase(addNotice.fulfilled, (state, action) => {
        state.items = action.payload;
        state.error = null;
        state.isLoading = false;
      });
  },
});

export const noticeReducer = noticeSlice.reducer;
