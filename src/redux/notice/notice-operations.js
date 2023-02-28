import { createAsyncThunk } from "@reduxjs/toolkit";
import { PublicApi } from "../../http/http";


// ....../api/notices/sell
// ....../api/notices/lost-found
// ....../api/notices/in-good-hands
//
//
/// favorite/:noticeId

export const getNotice = createAsyncThunk("/notices", async (value, thunkAPI) => {
  try {
    const { auth } = thunkAPI.getState();
    console.log(auth)
    const res = await PublicApi.get(`/api/notices/${value}`);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getNoticeById = createAsyncThunk("/notices/", async (id, thunkAPI) => {
  try {
    const res = await PublicApi.get(`/api/notices/${id}`);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
// 63fccf4666bd53761a09dbe1

export const addToFavorite = createAsyncThunk("/notices/favorite", async (id, thunkAPI) => {
  try {
    const { auth } = thunkAPI.getState();
    console.log(auth)
    const res = await PublicApi.patch(`/api/notices/favorite/${id}`);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getNoticesBySearch = createAsyncThunk("/notices?search", async (query, thunkAPI) => {
  try {
    const res = await PublicApi.get(`/api/notices?search=${query}`);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
