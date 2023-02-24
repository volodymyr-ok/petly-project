import { BrowserRouter, Route, Routes } from "react-router-dom";
import PublicRoute from "./components/PublicRoute/PublicRoute";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import { GlobalStyle } from "./GlobalStyles";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import NewsPage from "./pages/NewsPage/NewsPage";
import NoticesPage from "./pages/NoticesPage/NoticesPage";
import OurFriendsPage from "./pages/OurFriendsPage/OurFriendsPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import UserPage from "./pages/UserPage/UserPage";
// import {PublicRoute} from './components/PublicRoute/PublicRoute';

const App = () => {
  return (
    <BrowserRouter>
      <>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/register" element={
                                <PublicRoute redirectTo="/user">
                                    <RegisterPage/>
                                </PublicRoute>
                            }
                        />
            {/* <Route path="/register" element={<RegisterPage />} /> */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/friends" element={<OurFriendsPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/user" element={<UserPage />} />
            <Route path="/notices" element={<NoticesPage />} />
            {/* <Route path="*" element={<div>404</div>} /> */}
          </Route>
        </Routes>
      </>
    </BrowserRouter>
  );
};

export default App;
