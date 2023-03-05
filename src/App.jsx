import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Loader } from "./components/Loader/Loder";
import PublicRoute from "./components/PublicRoute/PublicRoute";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import { GlobalStyle } from "./GlobalStyles";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import NewsPage from "./pages/NewsPage/NewsPage";
import NoticesPage from "./pages/NoticesPage/NoticesPage";
import OurFriendsPage from "./pages/OurFriendsPage/OurFriendsPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import UserPage from "./pages/UserPage/UserPage";
import { getUser } from "./redux/auth/auth-operations";
import { selectIsLoading } from "./redux/auth/auth-selectors";
import NotFound from "./components/NotFound/NotFound";
import { NoticesCategoryList } from "./components/NoticesCategoryLIst/NoticesCategoryLIst";

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <>
      <Loader isLoading={isLoading} />
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <PublicRoute redirectTo="/user">
                <RegisterPage />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute redirectTo="/user">
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="/user"
            element={
              <PrivateRoute>
                <UserPage />
              </PrivateRoute>
            }
          />

          <Route path="/news" element={<NewsPage />} />
          <Route path="/friends" element={<OurFriendsPage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/notices" element={<NoticesPage />}>
            <Route path=":category" element={<NoticesCategoryList />}>
              <Route path=":id" />
            </Route>

            {/* <Route path="sell/:id"></Route>
            <Route path="lost-found" element={<NoticesCategoryList />}></Route>
            <Route path="lost-found/:id"></Route>
            <Route path="in-good-hands" element={<NoticesCategoryList />}></Route>
            <Route path="in-good-hands/:id"></Route>
            <Route path="favorite-ads" element={<NoticesCategoryList />}></Route>
            <Route path="favorite-ads/:id"></Route>
            <Route path="my-ads" element={<NoticesCategoryList />}></Route>
            <Route path="my-ads/:id"></Route> */}
          </Route>
          {/* <Route path="*" element={<div>404</div>} /> */}
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
    // </BrowserRouter>
  );
};

export default App;
