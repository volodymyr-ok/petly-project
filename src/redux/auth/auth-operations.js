import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { PrivateApi, PublicApi, token } from "../../http/http";

export const registerUser = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post("/users/register", credentials);
      token.set(res.data.accessToken);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, thunkAPI) => {
    try {
      const res = await PublicApi.post("/auth/login", {
        email: email,
        password: password,
      });
      token.set(res.data.accessToken);
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
      const res = await PrivateApi.post("/auth/logout");
      token.unset();
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getUser = createAsyncThunk("auth/getUser", async (_, thunkAPI) => {
  const { auth } = thunkAPI.getState();

  const persistedToken = auth.token;
  const persistedIsAuth = auth.isAuth;
  if (persistedToken === null || persistedIsAuth) {
    return thunkAPI.rejectWithValue("");
  }
  token.set(persistedToken);
  try {
    const res = await PrivateApi.get("/user");
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// export const loginGoogle = createAsyncThunk(
//   "auth/loginGoogle",
//   async (_, thunkAPI) => {
//     try {
//       const res = await PublicApi.get("/auth/google", {
//         headers: {
//           accept: "*/*",
//         },
//       });
//       token.set(res.data.accessToken);
//       getUser();
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
