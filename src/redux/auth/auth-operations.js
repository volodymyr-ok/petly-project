import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { PrivateApi, PublicApi, token } from "../../http/http";

export const registerUser = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const res = await PublicApi.post("/api/users/register", credentials);
      token.set(res.data.token);
      return res.data;
    } catch (error) {
      console.log("error", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, thunkAPI) => {
    try {
      const res = await PublicApi.post("/api/users/login", {
        email: email,
        password: password,
      });
      token.set(res.data.token);
      toast.success(`Welcome back`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async (_, thunkAPI) => {
    try {
      const res = await PrivateApi.post("/api/users/logout");
      console.log("ogoutUser OPER", res.data);
      token.unset();
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getUser = createAsyncThunk(
  // "users/getUser",
  "auth/getUser",
  async (_, thunkAPI) => {
    const { auth } = thunkAPI.getState();
    const persistedToken = auth.token;
    const persistedIsAuth = auth.isAuth;
    if (persistedToken === null || persistedIsAuth) {
      return thunkAPI.rejectWithValue("");
    }
    token.set(persistedToken);
    try {
      const res = await PrivateApi.get("/api/users/current");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addFavorites = createAsyncThunk(
  "auth/addFavorites",
  async (id, thunkAPI) => {
    try {
      const { data } = await PrivateApi.patch(`/api/notices/favorite/${id}`);
      return id;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const removeFavorites = createAsyncThunk(
  "auth/removeFavorites",
  async (id, thunkAPI) => {
    try {
      await PrivateApi.patch(`/api/notices/favorite/${id}`);
      return id;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const loginGoogle = createAsyncThunk(
  "auth/loginGoogle",
  async ({ tokenParam }, thunkAPI) => {
    try {
      const res = await PrivateApi.get("/api/users/current", {
        headers: {
          accept: "*/*",
          Authorization: `Bearer ${tokenParam}`,
        },
      });
      token.set(tokenParam);
      res.data.token = tokenParam;
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
