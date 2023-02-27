import { createAsyncThunk } from "@reduxjs/toolkit";
import { PublicApi } from "../../http/http";

export const getNews = createAsyncThunk("/news", async (_, thunkAPI) => {
  try {
    const res = await PublicApi.get("/api/news");
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getNewsBySearch = createAsyncThunk("/news?search", async (query, thunkAPI) => {
  try {
    const res = await PublicApi.get(`/api/news?search=${query}`);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
