import { createSlice } from "@reduxjs/toolkit";
import { getUser, loginUser, logoutUser } from "./auth-operations";
import { Notify } from "notiflix";
import { token } from "../../http/http";

const authInitialState = {
  user: {
    email: "",
    id: "",
    transactions: [
      {
        description: "Transaction's description",
        category: "Продукты",
        amount: 0,
        date: "2020-12-31",
        _id: "507f1f77bcf86cd799439013",
      },
    ],
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

      .addCase(loginUser.pending, handlePending)
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        Notify.failure(`Wrong email or password`);
        state.error = action.payload;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.userData;
        state.token = action.payload.accessToken;
        Notify.success(`Welcome back, ${state.user.email}`);
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
        Notify.success(`See ya, ${state.user.email}`);
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
