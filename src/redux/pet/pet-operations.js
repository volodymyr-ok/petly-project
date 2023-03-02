import { createAsyncThunk } from "@reduxjs/toolkit";
import { PrivateApi, PublicApi } from "../../http/http";

export const addPet = createAsyncThunk("/api/pets/", async (data, thunkAPI) => {
    try {
      console.log(data)
      const res = await PrivateApi.post(`/api/pets/`, data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
  );