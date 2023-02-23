import { createSlice } from "@reduxjs/toolkit";
import {
  getUser,
  loginUser,
  logoutUser,
  registerUser,
} from "./auth-operations";
// import { Notify } from "notiflix";
import { toast } from "react-toastify";
import { token } from "../../http/http";

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
  reducers: {
    addToken(state, action) {
      state.token = action.payload.accessToken;
      token.set(action.payload.accessToken);
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(registerUser.pending, handlePending)
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        toast.error("Success");
        // Notify.failure(`Fail`);
        state.error = action.payload;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.userData;
        state.token = action.payload.accessToken;
        toast.success(`Welcome, ${state.user.email}`);
        // Notify.success(`Welcome, ${state.user.email}`);
        state.isAuth = true;
      })

      .addCase(loginUser.pending, handlePending)
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        toast.error(`Wrong email or password`);
        // Notify.failure(`Wrong email or password`);
        state.error = action.payload;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.userData;
        state.token = action.payload.accessToken;
        toast.success(`Welcome back, ${state.user.email}`);
        state.isAuth = true;
      })

      // .addCase(loginGoogle.pending, handlePending)
      // .addCase(loginGoogle.rejected, (state, action) => {
      //   state.isLoading = false;
      //   Notify.failure(`Wrong email or password`);
      //   state.error = action.payload;
      // })
      // .addCase(loginGoogle.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   state.token = action.payload.accessToken;
      //   Notify.success(`Welcome back, ${state.user.email}`);
      //   state.isAuth = true;
      // })

      .addCase(logoutUser.pending, handlePending)
      .addCase(logoutUser.rejected, handleRejected)
      .addCase(logoutUser.fulfilled, (state) => {
        toast.success(`See ya, ${state.user.email}`);
        state.user = authInitialState.user;
        state.token = null;
        state.isAuth = false;
        state.isLoading = false;
      })
      .addCase(getUser.pending, handlePending)
      .addCase(getUser.rejected, handleRejected)
      .addCase(getUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuth = true;
        state.isLoading = false;
      });
  },
});

export const { addToken } = authSlice.actions;
export const authReducer = authSlice.reducer;
