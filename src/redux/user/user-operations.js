import { createAsyncThunk } from "@reduxjs/toolkit";
import { PrivateApi } from "../../http/http";

export const updateAvatars = createAsyncThunk(
  "/user/avatar",
  async (file, thunkAPI) => {
    try {
      const formData = new FormData();
      formData.append("avatar", file);
      const res = await PrivateApi.patch("/api/users/avatars", formData);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
