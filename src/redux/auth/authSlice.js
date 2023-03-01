import { createSlice } from "@reduxjs/toolkit";
import {
  getUser,
  loginUser,
  logoutUser,
  registerUser,
  loginGoogle,
  // getUserProfile,
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
    notices: [""],
    favorites: [""],
  },
  token: null,
  isAuth: false,
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, handlePending)
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        Notify.failure(`Fail`);
        state.error = action.payload;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        Notify.success(`Welcome, ${state.user.email}`);
        state.isAuth = true;
      })

      .addCase(loginUser.pending, handlePending)
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        // toast.error(`${action.payload}Wrong email or password`);
        // Notify.failure(`${action.payload}`);
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        Notify.success(`Welcome back, ${state.user.email}`);
        state.isAuth = true;
      })

      .addCase(loginGoogle.pending, handlePending)
      .addCase(loginGoogle.rejected, (state, action) => {
        state.isLoading = false;
        Notify.failure(`Wrong email or password`);
        state.error = action.payload;
      })
      .addCase(loginGoogle.fulfilled, (state, action) => {
        state.isLoading = false;
        state.pets = action.payload.pets;
        state.user = action.payload.user;
        state.token = action.payload.token;
        Notify.success(`Welcome, ${state.user.email}`);
        state.isAuth = true;
      })

      .addCase(getUser.pending, handlePending)
      .addCase(getUser.rejected, handleRejected)
      .addCase(getUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuth = true;
        state.isLoading = false;
        // Notify.failure(`${action.payload}`);
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
