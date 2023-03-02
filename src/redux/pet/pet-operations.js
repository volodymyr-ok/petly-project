import { createAsyncThunk } from "@reduxjs/toolkit";
import { PrivateApi, PublicApi } from "../../http/http";

export const addPet = createAsyncThunk("/api/pets/", async (credentials, thunkAPI) => {
    try {
      console.log(credentials)
      const res = await PrivateApi.post(`/api/pets/`, credentials);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
  );