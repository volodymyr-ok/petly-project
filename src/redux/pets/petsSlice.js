import { createSlice } from "@reduxjs/toolkit";
import { addPets } from "./pets-operations";

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleFulfilled = (state, action) => {
  state.items.push(action.payload);
  state.isLoading = false;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  state.items = [];
};

const petsSlice = createSlice({
  name: "pets",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(addPets.pending, handlePending)
      .addCase(addPets.fulfilled, handleFulfilled)
      .addCase(addPets.rejected, handleRejected);
  },
});

export const petsReducer = petsSlice.reducer;
