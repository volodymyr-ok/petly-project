import { createAsyncThunk } from "@reduxjs/toolkit";
import { PublicApi } from "../../http/http";

export const getNews = createAsyncThunk("/news", async (_, thunkAPI) => {
  try {
    const res = await PublicApi.get("/news");
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
