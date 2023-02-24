import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import { GlobalStyle } from "./GlobalStyles";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import NewsPage from "./pages/NewsPage/NewsPage";
import NoticesPage from "./pages/NoticesPage/NoticesPage";
import OurFriendsPage from "./pages/OurFriendsPage/OurFriendsPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import UserPage from "./pages/UserPage/UserPage";

export default function App() {
  return (
    <BrowserRouter>
      <>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/friends" element={<OurFriendsPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/user" element={<UserPage />} />
            <Route path="/notices" element={<NoticesPage />} />
          </Route>
          {/* <Route path="*" element={<div>404</div>} /> */}
        </Routes>
      </>
    </BrowserRouter>
  );
}
