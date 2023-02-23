export const selectIsAuth = (state) => state.auth.isAuth;
export const selectToken = (state) => state.auth.token;
export const selectIsLoading = (state) => state.auth.isLoading;
export const selectUsername = (state) => state.auth.user.email;
