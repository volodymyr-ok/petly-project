import { createSlice } from "@reduxjs/toolkit";
import { getNews, getNewsBySearch } from "./news-operations";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleFulfilled = (state, action) => {
  state.items = action.payload;
  state.isLoading = false;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const newsSlice = createSlice({
  name: "news",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(getNews.pending, handlePending);
    builder.addCase(getNews.fulfilled, handleFulfilled);
    builder.addCase(getNews.rejected, handleRejected);

    builder.addCase(getNewsBySearch.pending, handlePending);
    builder.addCase(getNewsBySearch.fulfilled, handleFulfilled);
    builder.addCase(getNewsBySearch.rejected, handleRejected);
  },
});

export const newsReducer = newsSlice.reducer;
