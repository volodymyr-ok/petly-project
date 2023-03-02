import { createAsyncThunk } from "@reduxjs/toolkit";
import { PrivateApi, PublicApi } from "../../http/http";

export const getNotice = createAsyncThunk(
  "/notices",
  async (value, thunkAPI) => {
    try {
      if (value === "in good hands") value = "in-good-hands";
      const res = await PublicApi.get(`/api/notices/${value}`);
      return res.data.data;
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
export const addToFavorite = createAsyncThunk(
  "/notices/favorite",
  async (id, thunkAPI) => {
    try {
      const res = await PublicApi.patch(`/api/notices/favorite`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getMyNorices = createAsyncThunk(
  "/notices/my",
  async (id, thunkAPI) => {
    try {
      const res = await PublicApi.patch(`/api/notices/my`);
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
