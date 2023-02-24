import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
// import { useDispatch, useSelector } from "react-redux";
import storage from "redux-persist/lib/storage";
import { authReducer } from "./auth/authSlice";

const authConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

// const persistedAuthReducer = persistReducer(authConfig, authReducer);

// const rootReducer = combineReducers({
//   auth: persistedAuthReducer,
// });

export const store = configureStore({
  // reducer: rootReducer,
  reducer: {
    auth: persistReducer(authConfig, authReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
