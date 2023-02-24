import { createSlice } from "@reduxjs/toolkit";
import { getNews } from "./news-operations";

const handlePending = (state) => {
  state.isLoading = true;
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
    builder.addCase(getNews.pending, (state) => {
      handlePending(state);
    });
    builder.addCase(getNews.fulfilled, (state, action) => {
      state.items = action.payload;
    });
    builder.addCase(getNews.rejected, (state, action) => {
      handleRejected(state, action);
    });
  },
});

export const newsReducer = newsSlice.reducer;
