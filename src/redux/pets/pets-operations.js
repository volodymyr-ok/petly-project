import { createAsyncThunk } from "@reduxjs/toolkit";
import { PrivateApi } from "../../http/http";

export const addPets = createAsyncThunk(
  "pets",
  async (obj, { rejectWithValue }) => {
    try {
      const data = await PrivateApi.post("/api/pets", obj);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
