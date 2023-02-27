import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Title, HomeSection } from "../HomePage/HomePage.styled";
import { Container } from "./../../components/Container/Container";
import { useDispatch } from "react-redux";
import { getUserProfile, loginGoogle } from "../../redux/auth/auth-operations";

const HomePage = () => {
  const [searchParams] = useSearchParams();
  const tokenParam = searchParams.get("token");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (tokenParam) {
      dispatch(loginGoogle({ tokenParam }));
      navigate("/user");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tokenParam]);

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
