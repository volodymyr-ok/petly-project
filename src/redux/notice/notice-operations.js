import { createAsyncThunk } from "@reduxjs/toolkit";
import { PrivateApi, PublicApi } from "../../http/http";

export const getNoticesPublic = createAsyncThunk(
  "notices/getNoticesPublic",
  async (category, thunkAPI) => {
    try {
      const res = await PublicApi.get(`/api/notices/${category}`);
      return res.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getNoticesPrivate = createAsyncThunk(
  "notices/getNoticesPrivate",
  async (category, thunkAPI) => {
    try {
      const res = await PrivateApi.get(`/api/notices/${category}`);
      return res.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

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
export const updateNotice = createAsyncThunk(
  "notices/:id",
  async (data, thunkAPI) => {
    try {
      const res = await PrivateApi.patch(`/api/notices/${data[1]}`, data[0]);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const updateNoticeAvatar = createAsyncThunk(
  "notices/avtar/:id",
  async (data, thunkAPI) => {
    try {
      const res = await PrivateApi.patch(
        `/api/notices/avatars/${data[1]}`,
        data[0]
      );
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
