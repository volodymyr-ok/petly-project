import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { PrivateApi, PublicApi, token } from "../../http/http";

export const registerUser = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      // const res = await axios.post("/users/register", credentials);
      const res = await PublicApi.post("/api/users/register", credentials);
      token.set(res.data.token);
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
      const res = await PublicApi.post("/api/users/login", {
        email: email,
        password: password,
      });
      token.set(res.data.token);
      console.log("resAPI", res);
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
      token.unset();
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getUser = createAsyncThunk(
  "users/getUser",
  async (_, thunkAPI) => {
    const { auth } = thunkAPI.getState();

    console.log("getUser", auth);

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
