import React, { useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Title, HomeSection } from "../HomePage/HomePage.styled";
import { Container } from "./../../components/Container/Container";
import { token } from "../../http/http";
import { useDispatch } from "react-redux";
import { loginGoogle } from "../../redux/auth/auth-operations";

const HomePage = () => {
  const [searchParams] = useSearchParams();
  const tokenParam = searchParams.get("token");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (tokenParam) {
      dispatch(loginGoogle(token));
      navigate("/");
    }
    console.log("params", token);
  }, [token]);

  return (
    <>
      <HomeSection>
        <Container>
          <Title>Take good care of your small pets</Title>
        </Container>
      </HomeSection>
    </>
  );
};

export default HomePage;
