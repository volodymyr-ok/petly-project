import { createSlice } from "@reduxjs/toolkit";
import {
  getUser,
  loginUser,
  logoutUser,
  registerUser,
  loginGoogle,
  addFavorites,
  removeFavorites,
} from "./auth-operations";
import { Notify } from "notiflix";

const authInitialState = {
  user: {
    id: "",
    data: {
      email: "",
      name: "",
      city: "",
      phone: "",
      birthday: "",
    },
    pets: [
      {
        id: "",
        name: "",
        birthday: "",
        breed: "",
        image: "",
        comments: "",
      },
    ],
    notices: [],
    favorites: [],
  },
  token: null,
  isAuth: false,
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  Notify.failure(`An error occurred, please try again`);
};

const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, handlePending)
      .addCase(registerUser.rejected, handleRejected)
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        Notify.success(`Welcome, ${state.user.email}`);
        state.isAuth = true;
      })

      .addCase(loginUser.pending, handlePending)
      .addCase(loginUser.rejected, handleRejected)
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        Notify.success(`Welcome back, ${state.user.email}`);
        state.isAuth = true;
      })

      .addCase(loginGoogle.pending, handlePending)
      .addCase(loginGoogle.rejected, handleRejected)
      .addCase(loginGoogle.fulfilled, (state, action) => {
        state.isLoading = false;
        state.pets = action.payload.pets;
        state.user = action.payload.user;
        state.token = action.payload.token;
        Notify.success(`Welcome, ${state.user.email}`);
        state.isAuth = true;
      })

      .addCase(getUser.pending, handlePending)
      .addCase(getUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuth = true;
        state.isLoading = false;
      })

      .addCase(addFavorites.pending, handlePending)
      .addCase(addFavorites.rejected, handleRejected)
      .addCase(addFavorites.fulfilled, (state, action) => {
        state.user.favorites.push(action.payload);
        state.isAuth = true;
        state.error = null;
        state.isLoading = false;
      })

      .addCase(removeFavorites.pending, handlePending)
      .addCase(removeFavorites.rejected, handleRejected)
      .addCase(removeFavorites.fulfilled, (state, action) => {
        state.isAuth = true;
        state.error = null;
        state.isLoading = false;
        const index = state.user.favorites.findIndex(
          (el) => el === action.payload
        );
        state.user.favorites.splice(index, 1);
      })

      .addCase(logoutUser.pending, handlePending)
      .addCase(logoutUser.rejected, handleRejected)
      .addCase(logoutUser.fulfilled, (state) => {
        Notify.success(`See ya, ${state.user.email}`);
        state.user = authInitialState.user;
        state.token = null;
        state.isAuth = false;
        state.isLoading = false;
      });
  },
});

export const authReducer = authSlice.reducer;
