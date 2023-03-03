import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  PrivateApi,
  // PublicApi
} from "../../http/http";

// export const addPett = async (data) => {
//   const rar = await PrivateApi.post(
//     `https://petly-2v85.onrender.com/api/pets/`, data
//   );
  

//   return rar;
// };
export const addPet = createAsyncThunk("/api/pets", async (data, thunkAPI) => {
  try {
    console.log(data)
    const res = await PrivateApi.post(`/api/pets/`, data);
    console.log(res.data);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
