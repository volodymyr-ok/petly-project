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
    builder.addCase(getNotice.pending, handlePending);
    builder.addCase(getNotice.fulfilled, handleFulfilled);
    builder.addCase(getNotice.rejected, handleRejected);

    builder.addCase(getNoticeById.pending, handlePending);
    builder.addCase(getNoticeById.fulfilled, handleFulfilled);
    builder.addCase(getNoticeById.rejected, handleRejected);

    builder.addCase(getNoticesBySearch.pending, handlePending);
    builder.addCase(getNoticesBySearch.fulfilled, handleFulfilled);
    builder.addCase(getNoticesBySearch.rejected, handleRejected);
  },
});

export const noticeReducer = noticeSlice.reducer;
