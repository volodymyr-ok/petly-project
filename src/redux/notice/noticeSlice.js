import { createSlice } from "@reduxjs/toolkit";
import {
  addNotice,
  getNotice,
  getNoticeById,
  getNoticesBySearch,
} from "./notice-operations";

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleFulfilled = (state, action) => {
  console.log("getNoti", action.payload);
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
      .addCase(getNotice.rejected, handleRejected)
      .addCase(getNotice.fulfilled, (state, action) => {
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

      .addCase(addNotice.pending, handlePending)
      .addCase(addNotice.rejected, handleRejected)
      .addCase(addNotice.fulfilled, (state, action) => {
        console.log("chds", state.items, action.payload);
        state.items.push(action.payload);
        state.error = null;
        state.isLoading = false;
      });
  },
});

export const noticeReducer = noticeSlice.reducer;
