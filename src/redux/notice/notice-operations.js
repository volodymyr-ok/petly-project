import { createAsyncThunk } from "@reduxjs/toolkit";
import { PrivateApi, PublicApi } from "../../http/http";

export const getNotice = createAsyncThunk(
  "/notices",
  async (value, thunkAPI) => {
    try {
      if (value === "in good hands") value = "in-good-hands";
      const res = await PublicApi.get(`/api/notices/${value}`);
<<<<<<< HEAD
      return res.data;
=======
      return res.data.data;
>>>>>>> main
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getNoticeById = createAsyncThunk(
  "/notices/",
  async (id, thunkAPI) => {
    try {
      const res = await PublicApi.get(`/api/notices/${id}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

<<<<<<< HEAD
export const addNotice = createAsyncThunk(
  "notices/addNotice",
  async (data, thunkAPI) => {
    try {
      const res = await PrivateApi.post(`/api/notices`, data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
=======
>>>>>>> main
export const addToFavorite = createAsyncThunk(
  "/notices/favorite",
  async (id, thunkAPI) => {
    try {
      const res = await PublicApi.patch(`/api/notices/favorite/${id}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getNoticesBySearch = createAsyncThunk(
  "/notices?search",
  async (query, thunkAPI) => {
    try {
      const res = await PublicApi.get(`/api/notices?search=${query}`);
      return res.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
