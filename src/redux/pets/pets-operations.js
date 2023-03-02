import { createAsyncThunk } from "@reduxjs/toolkit";
import { PrivateApi, token } from "../../http/http";

export const addPets = createAsyncThunk(
  "pets",
  async (obj, { rejectWithValue, getState }) => {
    const getToken = getState().root.auth.token;
    console.log(getToken);
    try {
      token.set(getToken);
      const data = await PrivateApi.post("/api/pets", obj);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
