import { createSlice } from "@reduxjs/toolkit";
import { getNotice, getNoticeById, getNoticesBySearch } from "./notice-operations";

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
    .addCase(getNotice.fulfilled, handleFulfilled)
    .addCase(getNotice.rejected, handleRejected)

    .addCase(getNoticeById.pending, handlePending)
    .addCase(getNoticeById.fulfilled, handleFulfilled)
    .addCase(getNoticeById.rejected, handleRejected)

    .addCase(getNoticesBySearch.pending, handlePending)
    .addCase(getNoticesBySearch.fulfilled, handleFulfilled)
    .addCase(getNoticesBySearch.rejected, handleRejected)
  },
});

export const noticeReducer = noticeSlice.reducer;
