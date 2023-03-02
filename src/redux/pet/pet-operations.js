import { createAsyncThunk } from "@reduxjs/toolkit";
import { PrivateApi, PublicApi } from "../../http/http";

export const addPet = createAsyncThunk("/api/pets", async (data, thunkAPI) => {
    try {
     const res = await PrivateApi.post(`/api/pets/`, data);
     console.log(res.data)
     return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
  );